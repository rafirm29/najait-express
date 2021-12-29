import axios from 'axios';
import CONFIG from '../config';

export const fetchCurrentUser = () => {
  const token = localStorage.getItem('token') || '';
  return axios
    .get(`${CONFIG.API_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
