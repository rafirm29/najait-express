import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DaftarPenjahit from '../components/odersaya/DaftarPenjahit';
import PesananSaya from '../components/odersaya/PesananSaya';
import jwt from 'jsonwebtoken';

const available = true; // Dummy

const MyOrderContent = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.replace('/login');
    } else {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem('token');
        history.replace('/login');
      } else {
        console.log(user);
      }
    }
  }, []);
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
