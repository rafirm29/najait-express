import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  Popper,
  Paper,
  Skeleton,
} from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, Link, Redirect } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
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
  const [openPopper, setOpenPopper] = useState(false);

  const handleClickPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper(!openPopper);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopper(false);
  };

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
              paddingLeft: 1.5,
              paddingRight: 1.5,
              fontWeight: { xs: 500, md: 700 },
            }}
            onClick={auth.isAuthenticated() ? handleClickPopover : () => {}}
          >
            <Box display="flex" alignItems="center">
              {user ? (
                <>
                  <AccountCircleIcon color="inherit" />
                  <Box ml={0.75} mr={0.5}>
                    {user}
                  </Box>
                </>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {auth.isAuthenticated() ? (
                    <Skeleton />
                  ) : (
                    <Box display="flex" alignItems="center">
                      <LoginIcon color="inherit" mr={1} />
                      <Box ml={1}>Masuk</Box>
                    </Box>
                  )}
                </Link>
              )}
            </Box>
          </Button>
          <Popper
            open={openPopper}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            placement="bottom-end"
          >
            <Paper
              sx={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                p={1}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => (window.location.href = '/editprofile')}
              >
                <EditIcon color="primary" fontSize="sm" />
                <Typography
                  variant="subtitle2"
                  ml={1}
                  color="primary"
                  fontWeight="bold"
                >
                  Edit profil
                </Typography>
              </Box>
            </Paper>
            <Paper
              sx={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                p={1}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => {
                  auth.logOut();
                }}
              >
                <LogoutIcon color="primary" fontSize="sm" />
                <Typography
                  variant="subtitle2"
                  ml={1}
                  color="primary"
                  fontWeight="bold"
                >
                  Log out
                </Typography>
              </Box>
            </Paper>
          </Popper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
