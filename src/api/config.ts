import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
const baseUrl = process.env.BASE_URL || '';

export const apiCreator: () => AxiosInstance = () => {
  const instance = axios.create({
    baseURL: baseUrl ? `/${baseUrl}/api` : '/api',
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.method === 'get') {
        config.headers.common['Pragma'] = 'no-cache';
        config.headers.common['Cache-control'] = 'no-cache';
      }
      return config;
    },
    error => Promise.reject(error),    
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const code = (response || {})['code'];
      // if (code !== 0) {
      //   return Promise.reject(response);
      // }
      return (response || {})['data'];
    },
    error => Promise.reject(error),
  );
  return instance;
}