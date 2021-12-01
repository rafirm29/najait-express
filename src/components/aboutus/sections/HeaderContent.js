import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  logo: {
    width: '10rem',
    height: '10rem',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const HeaderContent = () => {
  const classes = useStyles();
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./assets/images/about-us-1.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="./assets/images/logo-white.png"
          alt="Najait Logo"
          className={classes.logo}
        />
        <Typography variant="h1" color="white">
          Najait
        </Typography>
      </Container>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          marginTop: '2rem',
          fontWeight: 700,
          color: 'white',
          padding: '0.5rem',
          fontSize: '1rem',
        }}
      >
        <Link to="/home" className={classes.link}>
          Daftar Sekarang
        </Link>
      </Button>
    </Grid>
  );
};

export default HeaderContent;