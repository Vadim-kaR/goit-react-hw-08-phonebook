import { axiosIntance } from './API';
import { toast } from 'react-toastify';

export const getUserContacts = async () => {
  try {
    const { data } = await axiosIntance.get('/contacts');
    return data;
  } catch (error) {
    toast.error(`is something wrong... ${error.message}`);
  }
};

export const removeUserContact = async contactID => {
  try {
    await axiosIntance.delete(`/contacts/${contactID}`);
    toast.success('contact removed');
    const { data } = await axiosIntance.get('/contacts');
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export const addNewContact = async newContact => {
  try {
    await axiosIntance.post('/contacts', newContact);
    toast.success('contact added');
    const { data } = await axiosIntance.get('/contacts');
    return data;
  } catch (error) {
    toast.error(`contact was not added - ${error.message}`);
  }
};
