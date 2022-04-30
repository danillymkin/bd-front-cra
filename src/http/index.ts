import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../constants/localStorage';
import { UserAndToken } from '../services/auth/models/userAndToken';

export const STATIC_URL = 'http://localhost:5000';
export const API_URL = `${STATIC_URL}/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: (status: number) => {
    return status < 500 && status !== 401;
  },
});

$api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (accessToken) {
    config.headers!.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<UserAndToken>(
          `${API_URL}/auth/refresh`,
          {
            withCredentials: true,
          },
        );
        console.log('interceptors.response:', response);
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  },
);

export default $api;
