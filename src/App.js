import React from 'react';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

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
    <ThemeProvider theme={THEME}>
      <Header />
      <Jumbotron />
      <Typography>Test</Typography>
      <Typography>Test</Typography>
      <Typography>Test</Typography>
      <Typography>Test</Typography>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
