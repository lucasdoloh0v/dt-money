import { fetchAuthSession, signOut } from 'aws-amplify/auth';
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'http://localhost:3333',
})

axios.interceptors.request.use(async (config) => {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();
  config.headers.Authorization = token;
  return config;
}, async (error) => {
  if (error.response?.status === 401) {
    await signOut();
    window.location.href = '/login';
  }
  return Promise.reject(error);
});