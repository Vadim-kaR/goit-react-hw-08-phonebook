import { configureStore } from '@reduxjs/toolkit';
import { defaultMiddleware } from './defaultMiddleware';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import { persistReducer, persistStore } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: defaultMiddleware,
});

export const persistor = persistStore(store);
