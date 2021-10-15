import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Jumbotron from '../components/Jumbotron';

let products = [];
for (let i = 0; i < 6; i++) {
  products.push(
    <Grid item xs={6} sm={4} md={2}>
      <Paper>
        <Typography p={1} fontSize="12px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ducimus
          officiis aliquam similique? Facilis eos voluptatum eveniet! Accusamus
          nam necessitatibus atque, quae eveniet illo repellendus reprehenderit,
          provident, perferendis veritatis ut?
        </Typography>
      </Paper>
    </Grid>
  );
}

const Home = () => {
  return (
    <React.Fragment>
      <Jumbotron />
      <Container>
        <Typography variant="h4" my={2}>
          Produk
        </Typography>
        <Grid container spacing={2}>
          {products}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
