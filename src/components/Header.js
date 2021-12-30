import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Popover,
  Skeleton,
} from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../context/auth';

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
      fontFamily='"Playfair Display", serif'
      borderRadius={3}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
        mx: { xs: 0.5, md: 1.5 },
        px: { xs: 0.5, md: 2 },
        py: { xs: 1 },
        fontSize: { xs: '16px' },
      }}
    >
      {text}
    </Typography>
  );
};

const Header = () => {
  const classes = useStyles();
  const auth = useAuth();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    if (auth.isAuthenticated() && !auth.isLoading) {
      const user = auth.getUser().first_name || null;
      setUser(user);
    }
  }, [auth.isLoading]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          color: 'black',
          backgroundColor: 'white',
        }}
      >
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor="left"
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            <Box sx={{ px: { xs: 3, md: 5 } }}>
              <Box mr={2} ml={1} my={2} sx={{ cursor: 'pointer' }}>
                <NavLink to="/home" className={classes.navlink}>
                  <Logo color="black" textColor="primary" />
                </NavLink>
              </Box>
              <Box mx={3} my={2}>
                <NavLink to="/aboutus" className={classes.navlink}>
                  <NavItem text="About Us" />
                </NavLink>
                <NavLink to="/profilpenjahit" className={classes.navlink}>
                  <NavItem text="Profil Penjait" />
                </NavLink>
                <NavLink to="/ordersaya" className={classes.navlink}>
                  <NavItem text="Order Saya" />
                </NavLink>
              </Box>
            </Box>
          </Drawer>
        </Box>

        {/* Home logo */}
        <Box
          mr={2}
          ml={1}
          sx={{ cursor: 'pointer', display: { xs: 'none', md: 'block' } }}
        >
          <NavLink to="/home" className={classes.navlink}>
            <Logo color="black" textColor="primary" />
          </NavLink>
        </Box>

        {/* Nav item(s) */}
        <Box display="flex" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NavLink to="/aboutus" className={classes.navlink}>
            <NavItem text="About Us" />
          </NavLink>
          <NavLink to="/profilpenjahit" className={classes.navlink}>
            <NavItem text="Profil Penjait" />
          </NavLink>
          <NavLink to="/ordersaya" className={classes.navlink}>
            <NavItem text="Order Saya" />
          </NavLink>
        </Box>

        {/* Sign in button */}
        <Box ml="auto">
          <Button
            variant="contained"
            color="primary"
            sx={{
              margin: { xs: '0 12px', md: '0 18px' },
              fontWeight: { xs: 500, md: 700 },
            }}
            onClick={auth.isAuthenticated() ? handleClickPopover : () => {}}
          >
            {user || (
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {auth.isAuthenticated() ? <Skeleton /> : 'Masuk'}
              </Link>
            )}
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Typography p={1.5} color="primary" fontWeight="bold">
              <Link
                to="/editprofile"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Edit profil
              </Link>
            </Typography>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
