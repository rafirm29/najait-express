import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "./Logo";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navlink: {
    textDecoration: "none",
    color: "inherit",
  },
});

// Nav item
const NavItem = ({ text }) => {
  return (
    <Typography
      fontFamily='"Playfair Display", serif'
      borderRadius={3}
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        mx: { xs: 0.5, md: 1.5 },
        px: { xs: 0.5, md: 2 },
        py: { xs: 0.5, md: 1 },
        fontSize: { xs: "14px" },
      }}
      onClick={() => console.log(text, " clicked")}
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
          color: "black",
          backgroundColor: "white",
        }}
      >
        {/* Home logo */}
        <Box
          mr={2}
          ml={1}
          sx={{ cursor: "pointer", display: { xs: "none", md: "block" } }}
        >
          <NavLink to="/home" className={classes.navlink}>
            <Logo color="black" textColor="primary" />
          </NavLink>
        </Box>

        {/* Nav item(s) */}

        <NavLink to="/aboutus" className={classes.navlink}>
          <NavItem text="About Us" />
        </NavLink>
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
                cursor: "pointer",
                borderRadius: "64px",
                padding: { xs: "4px", md: "8px" },
                "&:hover": {
                  backgroundColor: "#f0f0f0",
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
            margin: { xs: "0 12px", md: "0 18px" },
            fontWeight: { xs: 500, md: 700 },
          }}
        >
          Masuk
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
