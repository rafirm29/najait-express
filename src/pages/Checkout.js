import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";

function Checkout() {
  const [waktu_pesan, setWaktu_pesan] = useState(new Date());
  const handleWaktu_pesan = (newValue) => {
    setWaktu_pesan(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <Grid
          container
          p={2}
          columnSpacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={10}
            md={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card>
              <Box px={2} py={4}>
                <Box mb={4}>
                  <h2>Checkout</h2>
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
                  />
                  <TextField
                    sx={{ flex: 0.49 }}
                    id="pakaian"
                    name="pakaian"
                    label="Pakaian"
                    variant="outlined"
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
                      value={waktu_pesan}
                      onChange={handleWaktu_pesan}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                      minDateTime={new Date()}
                    />
                  </LocalizationProvider>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained">Pesan</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Checkout;
