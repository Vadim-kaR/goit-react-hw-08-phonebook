import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import { defaultMiddleware } from './defaultMiddleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: defaultMiddleware,
});
