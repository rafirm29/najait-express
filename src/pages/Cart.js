import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';

const Cart = () => {
  return (
    <Container>
      <Typography variant="h4" my={3}>
        Keranjang
      </Typography>
      <Grid container columnSpacing={5}>
        <Grid item xs={12} sm={7}>
          <Card>Cart item</Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Box borderBottom={1} borderColor="#C4C4C4">
                <Typography gutterBottom variant="h6">
                  Total Pesanan
                </Typography>
              </Box>
              <Box borderBottom={1} borderColor="#C4C4C4">
                <Grid container my={2}>
                  <Grid item xs>
                    <Typography fontWeight="bold">Subtotal</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Rp90.000</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container my={2}>
                  <Grid item xs>
                    <Typography fontWeight="bold">Total</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Rp90.000</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button variant="contained" color="primary">
                <Typography variant="body2" mr={1}>
                  Check out
                </Typography>
                <ArrowForwardIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
