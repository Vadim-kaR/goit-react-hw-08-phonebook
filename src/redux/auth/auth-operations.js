import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'services';
import { toast } from 'react-toastify';
import { createNewUser, logInUser, logOutUser, refreshUser } from 'services';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await createNewUser(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await logInUser(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await logOutUser();
    token.unset();
  } catch (error) {
    toast.error(`${error.message}`);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await refreshUser();
      return data;
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
