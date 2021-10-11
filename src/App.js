import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Typography, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Typography>Test</Typography>
    </ThemeProvider>
  );
}

export default App;
