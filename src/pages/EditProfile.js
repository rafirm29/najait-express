import { Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import EditProfileForm from '../components/editprofile/EditProfileForm';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CONFIG from '../config';

const EditProfileContent = () => {
  return (
    <>
      <Typography variant="h4" my={3}>
        Edit Profile
      </Typography>
      <EditProfileForm />
    </>
  );
};

const EditProfile = () => {
  const history = useHistory();

  useEffect(async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${CONFIG.API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response) {
          const { data } = response;
          console.log(data);
        } else {
          history.replace('/login');
        }
      } else {
        history.replace('/login');
      }
    } catch (err) {
      history.replace('/login');
    }
  }, []);

  return (
    <Container>
      <EditProfileContent />
    </Container>
  );
};

export default EditProfile;
