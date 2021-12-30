import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="/home">
        Najait
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LogIn = () => {
  const auth = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
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
    };
    console.log(payload);
    setLoading(true);
    setFeedback(null);
    try {
      const response = await axios.post(
        `${CONFIG.API_URL}/user/login`,
        payload
      );
      const { data } = response;
      console.log(data);
      localStorage.setItem('token', data.accessToken);
      setFeedback({
        type: 'success',
        msg: 'Success',
      });
      setTimeout(() => {
        window.location.href = '/home';
      }, 1500);
    } catch (err) {
      console.log('Error: Failed to log in');
      console.log(err);
      setFeedback({
        type: 'error',
        msg: 'Invalid username or password. Please try again',
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
            Sign in
          </Typography>
          {feedback ? (
            <Alert severity={feedback.type}>{feedback.msg}</Alert>
          ) : null}
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <LoadingButton
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <MuiLink href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MuiLink>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LogIn;
