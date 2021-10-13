import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from './Logo';
import { makeStyles } from '@mui/styles';

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
        <Box mr={2} ml={1} sx={{ cursor: 'pointer' }}>
          <Logo color="black" textColor="primary" />
        </Box>

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
