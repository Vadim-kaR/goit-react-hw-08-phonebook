import { axiosIntance } from './API';
import { token } from './API';
import { toast } from 'react-toastify';

export const createNewUser = async credentials => {
  try {
    const { data } = await axiosIntance.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export const logInUser = async credentials => {
  try {
    const { data } = await axiosIntance.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export const logOutUser = async () => {
  try {
    await axiosIntance.post('users/logout');
    token.unset();
  } catch (error) {
    toast.error(`${error.message}`);
  }
};

export const refreshUser = async () => {
  try {
    const { data } = await axiosIntance.get('/users/current');
    return data;
  } catch (error) {
    toast.error(`${error.message}`);
  }
};
