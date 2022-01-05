import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Logo from './Logo';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
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
                  najaitco@gmail.com
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <CallIcon />
                <Typography variant="subtitle2" ml={1}>
                  (+62)8815496814
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <LocationOnIcon />
                <Typography variant="subtitle2" ml={1}>
                  -
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <InstagramIcon />
                <Typography
                  variant="subtitle2"
                  ml={1}
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/profile.php?id=100071449763169'
                    )
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  @najait.co
                </Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <FacebookIcon />
                <Typography
                  variant="subtitle2"
                  ml={1}
                  onClick={() =>
                    window.open('https://www.instagram.com/najait.co/')
                  }
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  Najait Corp
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
