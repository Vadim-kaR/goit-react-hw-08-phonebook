import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserContacts, removeUserContact, addNewContact } from 'services';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', () => {
  return getUserContacts();
});

export const removeContact = createAsyncThunk(
  'contact/remove',
  async contactID => {
    return removeUserContact(contactID);
  }
);

export const addContact = createAsyncThunk('contact/add', async newContact => {
  return addNewContact(newContact);
});
