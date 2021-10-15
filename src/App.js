import React from 'react';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfilPenjahit from './pages/ProfilPenjahit';
import Cart from './pages/Cart';

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    h1: {
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
      main: '#266679',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Header />
        <Jumbotron />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/profilpenjahit" component={ProfilPenjahit} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="home" />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
