import axios from 'axios';

export const userRequest = axios.create({
  baseURL: 'https://lanation.bj/api/',
});
