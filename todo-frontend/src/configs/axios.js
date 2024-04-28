import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // Read base URL from environment variable
});

export default instance;
