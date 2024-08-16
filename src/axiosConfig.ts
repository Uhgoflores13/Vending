// src/axiosConfig.ts

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://products-api-ten.vercel.app/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la respuesta:', error);
    return Promise.reject(error);
  }
);

export default instance;
