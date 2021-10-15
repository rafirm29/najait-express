import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import React from 'react';
import Jumbotron from '../components/Jumbotron';

let products = [];
for (let i = 0; i < 6; i++) {
  products.push(
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardActionArea>
          {i % 2 === 0 ? (
            <CardMedia
              component="img"
              height="300"
              image="./assets/images/product1.jpg"
              alt="Product 1"
            />
          ) : (
            <CardMedia
              component="img"
              height="300"
              image="./assets/images/product2.jpg"
              alt="Product 1"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h6" fontFamily="Montserrat">
              Product 1
            </Typography>
            <Typography variant="body2" color="secondary" fontWeight="bold">
              Rp99.0000
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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
        <Grid container rowSpacing={1.5} columnSpacing={2}>
          {products}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
