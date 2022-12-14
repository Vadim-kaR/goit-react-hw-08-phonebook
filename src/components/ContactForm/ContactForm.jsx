import { Form, Formik } from 'formik';
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
    number: yup
      .string()
      .max(12)
      .required()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number is not valid'
      ),
  });

  const handleContactSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      name,
      number,
    };

    const alreadyName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyName) {
      toast.info(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
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
          <InputField htmlFor="name">
            <Box display="flex">
              <InputTitle>Name</InputTitle>
              <Inpute type="text" name="name" />
            </Box>

            <Error component="div" name="name" />
          </InputField>
          <InputField htmlFor="number">
            <Box display="flex">
              <InputTitle>Phone</InputTitle>
              <Inpute type="tel" name="number" />
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
