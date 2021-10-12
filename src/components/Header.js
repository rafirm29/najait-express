import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles({
  logo: {
    width: '54px',
    height: '54px',
  },
  'logo-container': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0.5em',
  },
});

// Najait logo
const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes['logo-container']}>
      <img
        src="./assets/images/logo najait item.png"
        alt="logo"
        className={classes.logo}
      />
      <Typography color="primary" variant="h5" fontWeight="bold" mr={2} ml={1}>
        Najait
      </Typography>
    </div>
  );
};

// Nav item
const NavItem = ({ text }) => {
  return (
    <Typography
      mx={2.5}
      px={2}
      py={1}
      fontFamily='"Playfair Display", serif'
      borderRadius={3}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
      onClick={() => console.log(text, ' clicked')}
    >
      {text}
    </Typography>
  );
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
        {/* Home logo */}
        <Logo />

        {/* Nav item(s) */}
        <NavItem text="Profil Penjait" />

        {/* Cart page */}
        <ShoppingCartIcon
          color="primary"
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
            borderRadius: '64px',
            padding: '8px',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        />

        {/* Sign in button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            margin: '0 18px',
            fontWeight: 700,
          }}
        >
          Masuk
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
