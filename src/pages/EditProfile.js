import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import EditProfileForm from '../components/editprofile/EditProfileForm';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';

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
  const auth = useAuth();
  const history = useHistory();

  useEffect(async () => {
    if (!auth.isAuthenticated()) {
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
