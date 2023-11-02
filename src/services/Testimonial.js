

import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
