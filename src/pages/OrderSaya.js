import { Container, Typography } from '@mui/material';
import React from 'react';
import DaftarPenjahit from '../components/odersaya/DaftarPenjahit';
import PesananSaya from '../components/odersaya/PesananSaya';

const available = true; // Dummy

const MyOrderContent = () => {
  return (
    <>
      <Typography variant="h4" my={3}>
        Daftar Penjahit
      </Typography>
      <DaftarPenjahit />
      <Typography variant="h4" my={3}>
        Pesanan Saya
      </Typography>
      <PesananSaya />
    </>
  );
};

const MyOrder = () => {
  if (!available) {
    return (
      <>
        <Typography variant="h4" my={3}>
          Anda tidak memiliki order!
        </Typography>
        <Typography>Pesan sekarang untuk melihat order</Typography>
      </>
    );
  } else {
    return <MyOrderContent />;
  }
};

const OrderSaya = () => {
  return (
    <Container>
      <MyOrder />
    </Container>
  );
};

export default OrderSaya;
