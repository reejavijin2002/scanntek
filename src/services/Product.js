

import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
