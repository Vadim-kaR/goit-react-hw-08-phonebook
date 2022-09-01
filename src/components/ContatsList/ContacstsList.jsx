import { Box } from 'components/Box/Box';
import {
  ContactItem,
  Text,
  NameText,
  NumberText,
  DeleteBtn,
} from './ContactsList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { getFilterName } from 'redux/contacts/contactsSelectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(getFilterName);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const getFiltredContact = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };

  const deleteContact = id => {
    dispatch(contactsOperations.removeContact(id));
  };

  return (
    <Box pt="l" pb="l" width="100%">
      <ul>
        {getFiltredContact().map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <Text>
              <NameText>{name}:</NameText>
              <NumberText>{phone}</NumberText>
            </Text>
            <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
          </ContactItem>
        ))}
      </ul>
    </Box>
  );
};

export { ContactsList };
