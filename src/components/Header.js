import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navlink: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

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
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        {/* Home logo */}
        <Box mr={2} ml={1} sx={{ cursor: 'pointer' }}>
          <NavLink to="/home" className={classes.navlink}>
            <Logo color="black" textColor="primary" />
          </NavLink>
        </Box>

        {/* Nav item(s) */}

        <NavLink to="/profilpenjahit" className={classes.navlink}>
          <NavItem text="Profil Penjait" />
        </NavLink>
        <NavLink to="/ordersaya" className={classes.navlink}>
          <NavItem text="Order Saya" />
        </NavLink>

        {/* Cart page */}
        <Box ml="auto">
          <NavLink to="/cart" className={classes.navlink}>
            <ShoppingCartIcon
              color="primary"
              sx={{
                cursor: 'pointer',
                borderRadius: '64px',
                padding: '8px',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            />
          </NavLink>
        </Box>

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
