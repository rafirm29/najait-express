import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";

function ReviewOrder(props) {
  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h6">Review Pemesanan</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <TextField
          sx={{ flex: 0.49 }}
          id="jenis"
          name="jenis"
          label="Jenis Reparasi"
          variant="standard"
          value={props.jenis}
          inputProps={{ readOnly: true }}
        />
        <TextField
          sx={{ flex: 0.49 }}
          id="pakaian"
          name="pakaian"
          label="Pakaian"
          variant="standard"
          value={props.pakaian}
          inputProps={{ readOnly: true }}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          multiline
          rows={5}
          id="catatan"
          name="catatan"
          label="Catatan"
          variant="standard"
          value={props.catatan}
          inputProps={{ readOnly: true }}
        />
      </Box>
      <Box>
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          id="payment"
          name="payment"
          label="Metode Pembayaran"
          variant="standard"
          value={props.payment}
          inputProps={{ readOnly: true }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        <TextField
          fullWidth
          id="waktu_pesan"
          name="waktu_pesan"
          label="Waktu Pesan"
          value={props.waktu_pesan.toDateString()}
          variant="standard"
          inputProps={{ readOnly: true }}
        />
      </Box>
    </Box>
  );
}

export default ReviewOrder;
