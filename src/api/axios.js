import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'http://13.231.164.178:5000',
  withCredentials: true,
  headers: {
    token: localStorage.getItem('Accesstoken'),
  },
});

export default instance;
