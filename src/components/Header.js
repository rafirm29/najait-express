import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fontWeight } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
  logo: {
    width: '70.96px',
    height: '72px',
    background: 'url(./assets/images/logo najait item.png)',
  },
});

// Najait logo
const Logo = () => {
  const classes = useStyles();
  return <div className={classes.logo}></div>;
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <Logo />
        <Typography
          sx={{
            color: '#266679',
            fontFamily: `"Playfair Display", serif`,
            fontWeight: 700,
            fontSize: '36px',
          }}
        >
          Najait
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
