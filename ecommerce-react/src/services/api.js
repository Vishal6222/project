import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = {
      message: error.response?.data?.message || 'An unexpected error occurred',
      status: error.response?.status,
      data: error.response?.data
    };
    return Promise.reject(customError);
  }
);

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

export const productsAPI = {
  getAllProducts: (params = {}) => api.get('/products', { params }),
  getProduct: (id) => api.get(`/products/${id}`),
  searchProducts: (query) => api.get(`/products/search`, { params: { q: query } }),
  getProductsByCategory: (category) => api.get(`/products/category/${category}`),
  getCategories: () => api.get('/products/categories')
};

export const orderAPI = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getOrderHistory: () => api.get('/orders/history'),
  getOrderDetails: (orderId) => api.get(`/orders/${orderId}`)
};

export default api;