import axios from 'axios';

// Your backend API base URL
const BASE_URL = 'https://api.yourecommerce.com/v1/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the auth token to requests
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default apiClient;