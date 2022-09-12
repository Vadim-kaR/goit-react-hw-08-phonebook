import axios from 'axios';
import { BASE_URL } from 'constants';

export const authAPI = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    authAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    authAPI.defaults.headers.common.Authorization = '';
  },
};
