import { Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle';

const Testimonials = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#8ED1C0',
        height: '100vh',
      }}
    >
      <SectionTitle text="Testimonials" />
    </Grid>
  );
};

export default Testimonials;
