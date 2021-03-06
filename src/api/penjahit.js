import axios from 'axios';
import CONFIG from '../config';

export const getAvailablePenjahit = () => {
  const token = localStorage.getItem('token');
  return axios
    .get(`${CONFIG.API_URL}/penjahit`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};

export const getPenjahitById = (id) => {
  const token = localStorage.getItem('token');
  return axios
    .get(`${CONFIG.API_URL}/penjahit/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
