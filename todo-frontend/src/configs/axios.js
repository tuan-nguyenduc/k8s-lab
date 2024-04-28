import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/', // Update the baseURL with your backend API URL
});

export default instance;
