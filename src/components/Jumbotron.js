import { Grid, Paper, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
      }}
    >
      <Grid item xs={12} sm={6}>
        <Container>
          <Box mx={2} px={2}>
            <Typography variant="h1" color="white" mb={2}>
              Najait
            </Typography>
            <Typography color="white" pl={0.5}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, ratione recusandae id sit corporis iure ullam nam
              exercitationem fuga pariatur quas non consectetur repudiandae
              suscipit similique? Asperiores voluptatum a corporis.
            </Typography>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
