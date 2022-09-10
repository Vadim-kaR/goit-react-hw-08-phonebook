import { Form, Formik } from 'formik';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import { Box } from 'components/Box/Box';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactsSelectors } from 'redux/contacts';
import { TiPlus } from 'react-icons/ti';
import {
  InputTitle,
  InputField,
  AddBtn,
  Inpute,
  Error,
} from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);

  let schema = yup.object().shape({
    name: yup
      .string()
      .max(16)
      .required()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'name may contain only letters'
      ),
  });

  const handleContactSubmit = ({ name }, { resetForm }) => {
    const newContact = {
      name,
      ...number,
    };

    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      toast.info(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    setNumber('');
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={schema}
      onSubmit={handleContactSubmit}
    >
      <Form autoComplete="off">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="l"
        >
          <InputField>
            <Box display="flex">
              <InputTitle>Name</InputTitle>
              <Inpute type="text" name="name" />
            </Box>

            <Error component="div" name="name" />
          </InputField>
          <InputField>
            <Box display="flex">
              <InputTitle>Phone</InputTitle>
              <PhoneInput
                country={'ua'}
                onChange={number => setNumber({ number })}
                inputProps={{
                  name: 'number',
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  height: '23px',
                  width: '200px',
                }}
              />
            </Box>

            <Error component="div" name="number" />
          </InputField>
          <AddBtn type="submit">
            <TiPlus size={12} />
            Add Contact
          </AddBtn>
        </Box>
      </Form>
    </Formik>
  );
};

export { ContactForm };
