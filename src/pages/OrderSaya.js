import { Container, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DaftarPenjahit from '../components/odersaya/DaftarPenjahit';
import PesananSaya from '../components/odersaya/PesananSaya';
import { useAuth } from '../context/auth';
import { fetchCurrentUser } from '../api/user';
import { getAvailablePenjahit } from '../api/penjahit';

const MyOrderContent = () => {
  const auth = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [myOrder, setMyOrder] = useState([]);
  useEffect(async () => {
    if (!auth.isAuthenticated()) {
      history.replace('/login');
    }
    try {
      const { order } = await fetchCurrentUser();
      const daftarPenjahit = await getAvailablePenjahit();
      const formattedOrder = order.map((order) => {
        if (order.inbound.status === 'ongoing') {
          const penjahit = daftarPenjahit.filter(
            (penjahit) =>
              penjahit.id_penjahit === order.inbound.inboundIdPenjahit
          )[0];
          return { ...order, penjahit: penjahit.name };
        }
        return { ...order, penjahit: null };
      });
      console.log(formattedOrder);
      setMyOrder(formattedOrder);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(myOrder);
    }
  }, []);

  if (loading) return <Skeleton />;

  if (myOrder.length === 0)
    return (
      <>
        <Typography variant="h4" my={3}>
          Order saya
        </Typography>
        <Typography>Anda belum memiliki pesanan</Typography>
      </>
    );

  return (
    <>
      <Typography variant="h4" my={3}>
        Daftar Penjahit
      </Typography>
      <DaftarPenjahit />
      <Typography variant="h4" my={3}>
        Pesanan Saya
      </Typography>
      <PesananSaya myOrders={myOrder} />
    </>
  );
};

const OrderSaya = () => {
  return (
    <Container>
      <MyOrderContent />
    </Container>
  );
};

export default OrderSaya;
