import React from 'react';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/lab';

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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
          <MenuItem value="Other">Other (tulis di catatan)</MenuItem>
        </TextField>
        <TextField
          sx={{ flex: 0.49 }}
          id="pakaian"
          name="pakaian"
          label="Pakaian"
          variant="outlined"
          placeholder="Baju, Celana, Rok, dll."
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
          placeholder="Contoh: Kaos bahan katun ukuran L dan ingin diperkecil dibagian lengannya karena terlalu besar dan panjangnya mau dipotong sekitar 2cm."
          variant="outlined"
          value={props.catatan}
          onChange={(e) => props.setCatatan(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          id="payment"
          name="payment"
          label="Metode Pembayaran"
          variant="outlined"
          value={props.payment}
          onChange={(e) => props.setPayment(e.target.value)}
          select
        >
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="OVO">OVO</MenuItem>
          <MenuItem value="Gopay">Gopay</MenuItem>
        </TextField>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          my: 2,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateTimePicker
            id="waktu_pesan"
            name="waktu_pesan"
            label="Waktu Pesan"
            value={props.waktu_pesan}
            onChange={handleWaktu_pesan}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                helperText="Jam operasional: 09.00 - 17.30"
              />
            )}
            minDateTime={new Date()}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}

export default CheckoutForm;
