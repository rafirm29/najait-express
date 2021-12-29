import React from "react";
import { Typography, ThemeProvider, createTheme, Box } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProfilPenjahit from "./pages/ProfilPenjahit";
import Cart from "./pages/Cart";
import OrderSaya from "./pages/OrderSaya";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Feedback from "./pages/Feedback";
import EditProfile from "./pages/EditProfile";
import Checkout from "./pages/Checkout";

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    h1: {
      fontFamily: `"Playfair Display", serif`,
    },
    h2: {
      fontFamily: `"Playfair Display", serif`,
    },
    h4: {
      fontFamily: `"Playfair Display", serif`,
    },
    h5: {
      fontFamily: `"Playfair Display", serif`,
    },
    h6: {
      fontFamily: `"Playfair Display", serif`,
    },
  },
  palette: {
    primary: {
      main: "#266679",
    },
    secondary: {
      main: "#F6A25A",
    },
  },
});

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/profilpenjahit" component={ProfilPenjahit} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/ordersaya" component={OrderSaya} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Redirect to="home" />
      </Switch>
      <Footer />
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
