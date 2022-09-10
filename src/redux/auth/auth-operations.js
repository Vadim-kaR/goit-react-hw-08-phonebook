import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'services';
import { createNewUser, logInUser, logOutUser, refreshUser } from 'services';

const register = createAsyncThunk('auth/register', credentials => {
  return createNewUser(credentials);
});

const logIn = createAsyncThunk('auth/login', credentials => {
  return logInUser(credentials);
});

const logOut = createAsyncThunk('auth/logout', () => {
  logOutUser();
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
    return refreshUser();
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
