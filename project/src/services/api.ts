import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  return api;
};
