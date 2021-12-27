import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Penjahit = () => {
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
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia atque maiores perferendis eligendi vel sit iste,
                dolorem, natus placeat exercitationem impedit nam at corrupti
                perspiciatis? Aperiam perferendis dolorum similique culpa! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur adipisci mollitia, totam sit voluptatem ducimus quam
                dolore. Sunt ad voluptatum nesciunt necessitatibus iure minima.
                Fugiat laborum recusandae officiis fuga.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs alignSelf="center" mx={1.5}>
            <Box display="flex" alignItems="center" my={1}>
              <LocationOnIcon color="secondary" />
              <Typography variant="subtitle2" ml={1}>
                Jl. Apel Blueberry Cherry No. 10, Jakarta
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" my={1}>
              <LocalOfferIcon color="secondary" />
              <Typography variant="subtitle2" ml={1}>
                Rp100.000 - Rp999.000
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

let listPenjahit = [];
for (let i = 0; i < 3; i++) {
  listPenjahit.push(<Penjahit />);
}

const ProfilPenjahit = () => {
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h4" my={3}>
          Profil Penjahit
        </Typography>
        {listPenjahit}
      </Container>
    </React.Fragment>
  );
};

export default ProfilPenjahit;
