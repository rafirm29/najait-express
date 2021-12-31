import axios from 'axios';
import CONFIG from '../config';

export const logOutUser = () => {
  const token = localStorage.getItem('token');
  return axios
    .delete(`${CONFIG.API_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response);
};
