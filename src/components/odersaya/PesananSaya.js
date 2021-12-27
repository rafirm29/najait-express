import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
} from "@mui/material";
import React from "react";

const order = {
  name: "Jahit Baju",
  status: 1,
};

const OrderStatus = ({ status }) => {
  return (
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      color="white"
      bgcolor={status === 0 ? "gray" : "#4ABDAC"}
      p={1}
    >
      {status === 0 ? "WAITING" : "ON GOING"}
    </Typography>
  );
};

const PesananSaya = () => {
  return (
    <Box my={2}>
      <Card>
        <Grid container p={2} columnSpacing={2} py={3}>
          <Grid item justifySelf="center">
            <Typography
              variant="h5"
              fontFamily="Montserrat"
              fontWeight="bold"
              gutterBottom
            >
              {order.name}
            </Typography>
            {order.status !== 0 ? (
              <Typography variant="body2">
                Penjahit: Jajang Jumanjang
              </Typography>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={0} sm={0} md={6} lg={7} />
          <Grid item xs={12} sm={12} md={3} lg={2} alignSelf="center">
            <Box
              display="flex"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 1, sm: 1, md: 0 },
              }}
            >
              <OrderStatus status={order.status} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default PesananSaya;
