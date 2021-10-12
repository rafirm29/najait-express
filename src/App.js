import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    h1: {
      fontFamily: `"Playfair Display", serif`,
    },
    h5: {
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
    </ThemeProvider>
  );
}

export default App;
