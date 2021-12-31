import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Card,
  CardContent,
  Skeleton,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { getAvailablePenjahit } from '../api/penjahit';
import { useState } from 'react';

const Penjahit = ({ penjahit }) => {
  return (
    <Box my={2}>
      <Card>
        <Grid container p={2} columnSpacing={2}>
          <Grid item justifySelf="center">
            <Avatar sx={{ height: 96, width: 96, my: 3, ml: 1.5 }}>P</Avatar>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                fontFamily="Montserrat"
                fontWeight="bold"
              >
                {penjahit.name}
              </Typography>
              <Typography variant="body2" align="justify">
                {penjahit.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs alignSelf="center" mx={1.5}>
            <Box display="flex" alignItems="center" my={1}>
              <LocationOnIcon color="secondary" />
              <Typography variant="subtitle2" ml={1}>
                {penjahit.address}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" my={1}>
              <LocalOfferIcon color="secondary" />
              <Typography variant="subtitle2" ml={1}>
                {penjahit.price_range_min} - {penjahit.price_range_max}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

const ProfilPenjahit = () => {
  const [listPenjahit, setPenjahit] = useState([]);
  const [loading, setLoading] = useState(true);

  const retrievePenjahit = async () => {
    try {
      const response = await getAvailablePenjahit();
      const renderedPenjahit = response.map((penjahit) => (
        <Penjahit penjahit={penjahit} />
      ));
      setPenjahit(renderedPenjahit);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    retrievePenjahit();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Typography variant="h4" my={3}>
          Profil Penjahit
        </Typography>
        {loading ? <Skeleton /> : listPenjahit}
      </Container>
    </React.Fragment>
  );
};

export default ProfilPenjahit;
