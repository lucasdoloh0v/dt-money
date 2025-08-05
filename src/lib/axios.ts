import { fetchAuthSession } from 'aws-amplify/auth';
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : 'http://localhost:3333',
})

api.interceptors.request.use(async (config) => {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();
  if (!token) {
    return config;
  }
  config.headers.Authorization = token;
  return config;
});