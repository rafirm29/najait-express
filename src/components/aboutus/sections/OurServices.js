import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import SectionTitle from "../SectionTitle";
import React from "react";

const OurServices = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("./assets/images/about-us-2.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <SectionTitle text="Our Services" />
      <Grid item xs={9} sm={7} md={5} mt={3}>
        <Card>
          <Box
            px={6}
            pt={3}
            mt={3}
            sx={{
              display: { xs: "block" },
              mx: { xs: 5, sm: 10, md: 15, lg: 20 },
            }}
          >
            <CardMedia
              component="img"
              image="./assets/images/najait-express.png"
              alt="Najait Express"
            />
          </Box>
          <CardContent>
            <Typography
              variant="h6"
              fontFamily="Montserrat, sans-serif"
              textAlign="center"
              color="primary"
              fontWeight="bold"
              gutterBottom
            >
              Express
            </Typography>
            <Typography variant="subtitle2">
              Najait menyediakan reparasi pakaian yang cepat dan berkualitas
              dengan harga yang terjangkau. Mitra penjahit kami dapat melakukan
              segala yang kamu inginkan dengan pakaianmu, seperti penjahitan,
              pengecilan dan pembesaran, penambalan lubang, pemasangan
              retsleting, dan lain-lain! Segala jasa tersedia, sesuai
              keinginanmu!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OurServices;
