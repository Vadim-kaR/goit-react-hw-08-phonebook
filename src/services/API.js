import axios from 'axios';
import { BASE_URL } from 'constants';

export const axiosIntance = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    axiosIntance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosIntance.defaults.headers.common.Authorization = '';
  },
};
