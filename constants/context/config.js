import axios from 'axios';

export const userRequest = axios.create({
  baseURL: 'http://192.168.1.79:8400/api/',
});
