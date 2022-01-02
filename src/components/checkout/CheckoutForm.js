import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";

function CheckoutForm(props) {
  const handleWaktu_pesan = (newValue) => {
    props.setWaktu_pesan(newValue);
  };

  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h6">Formulir Pemesanan</Typography>
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
          label="Jenis"
          variant="outlined"
          value={props.jenis}
          onChange={(e) => props.setJenis(e.target.value)}
          select
        >
          <MenuItem value="Pasang Kancing">Pasang Kancing</MenuItem>
          <MenuItem value="Potong Bahan">Potong Bahan</MenuItem>
          <MenuItem value="Mengecilkan Pakaian">Mengecilkan Pakaian</MenuItem>
          <MenuItem value="Vermak">Vermak</MenuItem>
        </TextField>
        <TextField
          sx={{ flex: 0.49 }}
          id="pakaian"
          name="pakaian"
          label="Pakaian"
          variant="outlined"
          value={props.pakaian}
          onChange={(e) => props.setPakaian(e.target.value)}
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
          variant="outlined"
          value={props.catatan}
          onChange={(e) => props.setCatatan(e.target.value)}
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            id="waktu_pesan"
            name="waktu_pesan"
            label="Waktu Pesan"
            value={props.waktu_pesan}
            onChange={handleWaktu_pesan}
            renderInput={(params) => <TextField {...params} fullWidth />}
            minDateTime={new Date()}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}

export default CheckoutForm;
