import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Skeleton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState, useEffect } from 'react';
import { getAvailablePenjahit } from '../../api/penjahit';

const dummyPenjahit = [
  {
    avatar: 'P',
    name: 'Lorem Lorem',
    location: 'Tangerang',
    availableLocation: ['Tangerang', 'Jakarta', 'Bandung'],
    available: true,
  },
  {
    avatar: 'X',
    name: 'Xorem Xorem',
    location: 'Jakarta',
    availableLocation: ['Jakarta'],
    available: false,
  },
];

const Status = ({ available }) => {
  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      color="white"
      bgcolor={available === 'available' ? 'green' : 'red'}
      p={1}
      mt={1}
    >
      {available === 'available' ? 'AVAILABLE' : 'UNAVAILABLE'}
    </Typography>
  );
};

const DaftarPenjahit = () => {
  const [loading, setLoading] = useState(true);
  const [daftarPenjahit, setDaftarPenjahit] = useState([]);

  useEffect(async () => {
    try {
      const daftarPenjahit = await getAvailablePenjahit();
      setDaftarPenjahit(daftarPenjahit);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <Skeleton />;

  if (daftarPenjahit.length === 0)
    return <Typography>Tidak ada penjahit</Typography>;

  return daftarPenjahit.map((penjahit) => {
    return (
      <Box my={2}>
        <Card>
          <Grid container p={2} columnSpacing={2}>
            <Grid item justifySelf="center">
              <Avatar
                sx={{ height: 96, width: 96, my: 3, ml: 1.5 }}
                src={penjahit.picture != null ? penjahit.picture : null}
              >
                {penjahit.picture != null ? '' : penjahit.name[0]}
              </Avatar>
            </Grid>
            <Grid item xs={7}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontFamily="Montserrat"
                  fontWeight="bold"
                >
                  {penjahit.name}
                </Typography>
                <Typography variant="body2">
                  Lokasi: {penjahit.statuspenjahit.current_location || '-'}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs alignSelf="center">
              <Typography variant="body2">Available untuk:</Typography>
              <Box display="flex" alignItems="center" my={1}>
                <LocationOnIcon color="secondary" />
                <Typography variant="subtitle2" ml={1}>
                  {penjahit.statuspenjahit.available_location || '-'}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Status available={penjahit.statuspenjahit.status} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
  });
};

export default DaftarPenjahit;
