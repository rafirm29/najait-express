import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

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
      bgcolor={available ? 'green' : 'red'}
      p={1}
      mt={1}
    >
      {available ? 'AVAILABLE' : 'UNAVAILABLE'}
    </Typography>
  );
};

const DaftarPenjahit = () => {
  return dummyPenjahit.map((penjahit) => {
    return (
      <Box my={2}>
        <Card>
          <Grid container p={2} columnSpacing={2}>
            <Grid item justifySelf="center">
              <Avatar sx={{ height: 96, width: 96, my: 3, ml: 1.5 }}>
                {penjahit.avatar}
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
                  Lokasi: {penjahit.location}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs alignSelf="center">
              <Typography variant="body2">Available untuk:</Typography>
              <Box display="flex" alignItems="center" my={1}>
                <LocationOnIcon color="secondary" />
                <Typography variant="subtitle2" ml={1}>
                  {penjahit.availableLocation.join(', ')}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Status available={penjahit.available} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
  });
};

export default DaftarPenjahit;
