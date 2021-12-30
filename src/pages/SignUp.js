import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import MuiLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import CONFIG from '../config';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';

const SignUp = () => {
  const auth = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [error, setError] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    address: null,
    phone: null,
  });
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    address: null,
    phone: null,
  });

  // Checking for validation errors in the form
  // Returns true if there's error
  const checkError = () => {
    for (const field in error) {
      if (Object.hasOwnProperty.call(error, field)) {
        if (!error[field]) {
          return true;
        }
      }
    }
    return false;
  };

  const handleChange = (e) => {
    const target = e.target;
    switch (target.name) {
      case 'firstName':
        if (target.value.length === 0) {
          setError({ ...error, firstName: 'First name cannot be empty' });
        } else if (target.value.length > 20) {
          setError({
            ...error,
            firstName: 'First name cannot be more than 20 characters',
          });
        } else if (!/^[a-z ,.'-]+$/i.test(target.value)) {
          setError({ ...error, firstName: 'Please enter a valid name' });
        } else {
          setError({ ...error, firstName: null });
        }
        setFormData({ ...formData, firstName: target.value });
        break;
      case 'lastName':
        if (target.value.length === 0) {
          setError({ ...error, lastName: 'Last name cannot be empty' });
        } else if (target.value.length > 20) {
          setError({
            ...error,
            lastName: 'Last name cannot be more than 20 characters',
          });
        } else if (!/^[a-z ,.'-]+$/i.test(target.value)) {
          setError({ ...error, lastName: 'Please enter a valid name' });
        } else {
          setError({ ...error, lastName: null });
        }
        setFormData({ ...formData, lastName: target.value });
        break;
      case 'email':
        if (target.value.length === 0) {
          setError({ ...error, email: 'Email cannot be empty' });
        } else if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(target.value)
        ) {
          setError({ ...error, email: 'Please enter a valid email' });
        } else {
          setError({ ...error, email: null });
        }
        setFormData({ ...formData, email: target.value });
        break;
      case 'password':
        if (target.value.length < 8) {
          setError({
            ...error,
            password: 'Password must be at least 8 characters long',
          });
        } else {
          setError({ ...error, password: null });
        }
        setFormData({ ...formData, password: target.value });
        break;
      case 'address':
        if (target.value.length === 0) {
          setError({ ...error, address: 'Address cannot be empty' });
        } else {
          setError({ ...error, address: null });
        }
        setFormData({ ...formData, address: target.value });
        break;
      case 'phone':
        if (target.value.length === 0) {
          setError({ ...error, phone: 'Phone number cannot be empty' });
        } else if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im.test(
            target.value
          )
        ) {
          setError({ ...error, phone: 'Please enter a valid phone number' });
        } else {
          setError({ ...error, phone: null });
        }
        setFormData({ ...formData, phone: e.target.value });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    checkError();
    if (auth.isAuthenticated()) {
      history.replace('/home');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      email: data.get('email'),
      password: data.get('password'),
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      address: data.get('address'),
      phone: data.get('phone'),
    };
    setLoading(true);
    setFeedback(null);
    try {
      const response = await axios.post(
        `${CONFIG.API_URL}/user/register`,
        payload
      );
      if (response.data.error === -2) {
        // Error email is taken
        setFeedback({
          type: 'error',
          msg: 'Email is already taken. Please try a different email',
        });
        setError({ ...error, email: 'Email is already taken' });
      } else {
        setFeedback({
          type: 'success',
          msg: 'Success',
        });
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setFeedback({
        type: 'error',
        msg: 'Please fill in the fields correctly',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Najait Logo"
            src="./assets/images/logo-black.png"
            sx={{ m: 1 }}
          />
          <Typography
            component="h1"
            variant="h5"
            fontFamily="Montserrat"
            gutterBottom
          >
            Sign up
          </Typography>
          {feedback ? (
            <Alert severity={feedback.type}>{feedback.msg}</Alert>
          ) : null}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={error.firstName}
                  helperText={error.firstName && error.firstName}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  error={error.lastName}
                  helperText={error.lastName && error.lastName}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={error.email}
                  helperText={error.email && error.email}
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={error.password}
                  helperText={error.password && error.password}
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  error={error.address}
                  helperText={error.address && error.address}
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  id="phone"
                  error={error.phone}
                  helperText={error.phone && error.phone}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <LoadingButton
              loading={loading}
              type={checkError() ? null : 'submit'}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <MuiLink href="/login" variant="body2">
                  Already have an account? Log in
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
