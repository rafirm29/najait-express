import React from 'react';
import { Typography, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
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
      main: '#266679',
    },
    secondary: {
      main: '#F6A25A',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/profilpenjahit" component={ProfilPenjahit} />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="home" />
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
