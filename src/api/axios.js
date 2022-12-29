import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    token: 'myToken',
  },
});

export default instance;
