import axios from 'axios';
import CONFIG from '../config';

export const getAvailablePenjahit = () => {
  const token = localStorage.getItem('token');
  console.log('Test');
  return axios
    .get(`${CONFIG.API_URL}/penjahit`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
