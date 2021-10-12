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
      <Typography
        sx={{
          color: '#266679',
          fontFamily: `"Playfair Display", serif`,
          fontWeight: 700,
          fontSize: '1.5em',
          marginRight: '54px',
        }}
      >
        Najait
      </Typography>
    </div>
  );
};

// Nav item
const NavItem = ({ text }) => {
  return (
    <Typography
      sx={{
        fontFamily: `"Playfair Display", serif`,
        marginX: '18px',
        padding: '6px 12px',
        cursor: 'pointer',
        borderRadius: '8px',
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
          sx={{
            marginLeft: 'auto',
            color: '#266679',
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
          sx={{
            margin: '0 18px 0 36px',
            fontWeight: 700,
            color: 'white',
            backgroundColor: '#266679',
            textTransform: 'capitalize',
            '&:hover': {
              color: 'white',
              backgroundColor: '#266679',
              filter: 'brightness(85%)',
            },
          }}
        >
          Masuk
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
