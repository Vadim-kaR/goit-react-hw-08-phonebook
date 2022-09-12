import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserContacts, removeUserContact, addNewContact } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await getUserContacts();
      return data;
    } catch (error) {
      toast.error(`is something wrong... ${error.message}`);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async contactID => {
    try {
      await removeUserContact(contactID);
      toast.success('contact removed');
      const { data } = await getUserContacts();
      return data;
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }
);

export const addContact = createAsyncThunk('contact/add', async newContact => {
  try {
    await addNewContact(newContact);
    toast.success('contact added');
    const { data } = await getUserContacts();
    return data;
  } catch (error) {
    toast.error(`contact was not added - ${error.message}`);
  }
});
