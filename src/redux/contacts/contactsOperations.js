import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(`is something wrong... ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (contactID, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactID}`);
      toast.success('contact removed');
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (newContact, { rejectWithValue }) => {
    try {
      await axios.post('/contacts', newContact);
      toast.success('contact added');
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(`contact was not added - ${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
