import { Typography, Box, Card, Grid } from '@mui/material';
import React, { useState } from 'react';

const OrderStatus = ({ status }) => {
  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      color="white"
      bgcolor={status === 'pending' ? 'gray' : '#4ABDAC'}
      p={1}
    >
      {status === 'pending' ? 'WAITING' : 'ON GOING'}
    </Typography>
  );
};

const PesananSaya = ({ myOrders }) => {
  if (myOrders.length === 0) {
    return <Typography>Tidak ada order</Typography>;
  }
  return myOrders.map((order) => {
    return (
      <Box my={2}>
        <Card>
          <Grid container p={2} columnSpacing={2} py={3}>
            <Grid item justifySelf="center">
              <Typography
                variant="h5"
                fontFamily="Montserrat"
                fontWeight="bold"
                gutterBottom
              >
                {order.jenis} {order.pakaian}
              </Typography>
              {order.inbound.status === 'ongoing' ? (
                <Typography variant="body2">
                  Penjahit: {order.penjahit || '-'}
                </Typography>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={0} sm={0} md={6} lg={7} />
            <Grid item xs={12} sm={12} md={3} lg={2} alignSelf="center">
              <Box
                display="flex"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <OrderStatus status={order.inbound.status} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
  });
};

export default PesananSaya;
