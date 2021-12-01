import { Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle';

const Faq = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <SectionTitle text="Frequently Asked Questions" dark={true} />
    </Grid>
  );
};

export default Faq;
