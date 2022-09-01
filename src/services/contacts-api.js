import axios from 'axios';
import { BASE_URL } from '../constants/baseURL';

axios.defaults.baseURL = BASE_URL;

export const fetchAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const removeContact = async contactID => {
  return await axios.delete(`/contacts/${contactID}`);
};

export const addContact = async contact => {
  return await axios.post('/contacts', contact);
};
