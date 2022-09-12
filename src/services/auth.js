import { authAPI } from './auth-api';

export const createNewUser = credentials => {
  return authAPI.post('/users/signup', credentials);
};

export const logInUser = credentials => {
  return authAPI.post('/users/login', credentials);
};

export const logOutUser = () => {
  return authAPI.post('users/logout');
};

export const refreshUser = () => {
  return authAPI.get('/users/current');
};
