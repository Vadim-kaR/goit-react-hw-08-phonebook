import { configureStore } from '@reduxjs/toolkit';
import { defaultMiddleware } from './defaultMiddleware';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import { persistReducer, persistStore } from 'redux-persist';
import contactsReducer from './contacts/contactsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: defaultMiddleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
