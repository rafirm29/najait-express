import { Grid, Paper, Container, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("./assets/images/jumbotron-bg.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Container>
          <Box mx={2} px={2}>
            <Typography variant="h1" color="white" mb={2}>
              Najait
            </Typography>
            <Typography color="white" pl={0.5}>
              Mitra perantara yang menghubungkan para penjahit keliling dengan
              kalian, para kawan jahit yang membutuhkan jasa reparasi/vermak
              baju
            </Typography>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  marginTop: "18px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Order Sekarang
              </Button>
            </Link>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
