import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await API.fetchAllContacts();
    } catch (error) {
      toast.error(`is something wrong... ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      await API.removeContact(id);
      toast.success('contact removed');
      return await API.fetchAllContacts();
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      await API.addContact(contact);
      toast.success('contact added');
      return await API.fetchAllContacts();
    } catch (error) {
      toast.error(`contact was not added - ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
