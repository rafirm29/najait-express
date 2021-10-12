import { Grid, Paper, Container, Typography } from '@mui/material';
import React from 'react';

const Jumbotron = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./assets/images/jumbotron-bg.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        '&::before': {
          content: '""',
          background: 'rgba(0,0,0,0.6)',
        },
      }}
    >
      <Grid item xs={6}>
        <Container
          sx={{
            color: 'white',
            marginX: '24px',
            paddingX: '12px',
          }}
        >
          <Typography>
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 600,
                fontFamily: `"Playfair Display", serif`,
              }}
            >
              Najait
            </h1>
            <p style={{ padding: '8px 0' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, ratione recusandae id sit corporis iure ullam nam
              exercitationem fuga pariatur quas non consectetur repudiandae
              suscipit similique? Asperiores voluptatum a corporis.
            </p>
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
