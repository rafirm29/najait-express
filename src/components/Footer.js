import { Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "./Logo";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box bgcolor="#266679" py={5}>
        <Container>
          <Grid container columnSpacing={5} color="white">
            <Grid item xs={12} sm={4}>
              <Logo color="white" textColor="white" />
              <Box>
                <Typography
                  variant="subtitle2"
                  color="white"
                  mt={1}
                  ml={1}
                  pr={6}
                >
                  Mitra perantara yang menghubungkan para penjahit keliling
                  dengan kalian, para kawan jahit yang membutuhkan jasa
                  reparasi/vermak baju
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box height="54px" display="flex" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Halaman
                </Typography>
              </Box>
              <Box mt={1}>
                <Link
                  href="/aboutus"
                  underline="none"
                  color="inherit"
                  variant="subtitle2"
                >
                  About Us
                </Link>
              </Box>
              <Box mt={1}>
                <Link
                  href="/home"
                  underline="none"
                  color="inherit"
                  variant="subtitle2"
                >
                  Beranda
                </Link>
              </Box>
              <Box mt={1}>
                <Link
                  href="/profilpenjahit"
                  underline="none"
                  color="inherit"
                  variant="subtitle2"
                >
                  Profil Penjahit
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box height="54px" display="flex" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Hubungi Kami
                </Typography>
              </Box>
              <Box mt={1} display="flex" alignItems="center">
                <EmailIcon />
                <Typography variant="subtitle2" ml={1}>
                  najait@gmail.com
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <CallIcon />
                <Typography variant="subtitle2" ml={1}>
                  (+62)81234567890
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <LocationOnIcon />
                <Typography variant="subtitle2" ml={1}>
                  Jl. Apel No. 1 Jakarta
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
