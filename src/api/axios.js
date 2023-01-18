import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.231.164.178:5000',
  withCredentials: true,
  headers: {
    token: 'myToken',
  },
});

export default instance;
