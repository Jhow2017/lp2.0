import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-rstcom20.cloudfunctions.net/api',
});

export default api;
