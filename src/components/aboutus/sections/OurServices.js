import { Grid, Box, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';
import React from 'react';

const OurServices = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("./assets/images/about-us-2.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <SectionTitle text="Our Services" />
    </Grid>
  );
};

export default OurServices;
