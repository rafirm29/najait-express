import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import SectionTitle from '../SectionTitle';
import React from 'react';

const OurServices = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("./assets/images/about-us-2.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <SectionTitle text="Our Services" />
      <Grid item xs={6} sm={4} md={3} mt={3}>
        <Card>
          <Box px={6} pt={3} mx={5} mt={3}>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, ratione recusandae id sit corporis iure ullam nam
              exercitationem fuga pariatur quas non consectetur repudiandae
              suscipit similique? Asperiores voluptatum a corporis.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OurServices;
