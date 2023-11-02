import axios from 'axios';

const API_ENDPOINT = 'YOUR_API_ENDPOINT_HERE'; 

export const fetchHeaderData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching header data:', error);
    throw error;
  }
};
