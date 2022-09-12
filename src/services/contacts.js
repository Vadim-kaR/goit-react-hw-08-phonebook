import { authAPI } from './auth-api';

export const getUserContacts = () => {
  return authAPI.get('/contacts');
};

export const removeUserContact = contactID => {
  return authAPI.delete(`/contacts/${contactID}`);
};

export const addNewContact = newContact => {
  return authAPI.post('/contacts', newContact);
};
