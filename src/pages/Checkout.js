import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import CheckoutForm from "../components/checkout/CheckoutForm";
import ReviewOrder from "../components/checkout/ReviewOrder";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CONFIG from "../config";
import { useAuth } from "../context/auth";

const steps = ["Formulir Pemesanan", "Review Pemesanan"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CheckoutForm />;
    case 1:
      return <ReviewOrder />;
    default:
      throw new Error("Unknown step");
  }
}

function Checkout() {
  const auth = useAuth();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);

  const [jenis, setJenis] = useState("");
  const [pakaian, setPakaian] = useState("");
  const [catatan, setCatatan] = useState("");
  const [payment, setPayment] = useState("");
  const [waktu_pesan, setWaktu_pesan] = useState(new Date());

  const handleNext = () => {
    if (jenis == "" || pakaian == "" || catatan == "") {
      alert("Tidak boleh ada field yang kosong!");
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(async () => {
    if (!auth.isAuthenticated()) {
      history.replace("/login");
    }
  }, []);

  const handleCheckout = () => {
    if (jenis == "" || pakaian == "" || catatan == "") {
      alert("Tidak boleh ada field yang kosong!");
    } else {
      const token = localStorage.getItem("token");
      axios
        .post(
          CONFIG.API_URL + `/order/add`,
          {
            jenis: jenis,
            pakaian: pakaian,
            catatan: catatan,
            payment: payment,
            waktu_pesan: waktu_pesan,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(function (response) {
          handleNext();
          history.push("/home");
          return response;
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Container>
      <Typography variant="h4" my={3}>
        Checkout
      </Typography>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card>
            <Box sx={{ px: { xs: 2, md: 4 } }} py={4}>
              <Box>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
              {activeStep === steps.length ? (
                <>
                  <Container maxWidth="xs">
                    <Typography variant="h6" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle2">
                      Your order number is #2001539. We have emailed your order
                      confirmation, and will send you an update when your order
                      has shipped.
                    </Typography>
                  </Container>
                </>
              ) : (
                <>
                  {activeStep == 0 ? (
                    <CheckoutForm
                      jenis={jenis}
                      setJenis={setJenis}
                      pakaian={pakaian}
                      setPakaian={setPakaian}
                      catatan={catatan}
                      setCatatan={setCatatan}
                      payment={payment}
                      setPayment={setPayment}
                      waktu_pesan={waktu_pesan}
                      setWaktu_pesan={setWaktu_pesan}
                    />
                  ) : activeStep == 1 ? (
                    <ReviewOrder
                      jenis={jenis}
                      setJenis={setJenis}
                      pakaian={pakaian}
                      setPakaian={setPakaian}
                      catatan={catatan}
                      setCatatan={setCatatan}
                      payment={payment}
                      setPayment={setPayment}
                      waktu_pesan={waktu_pesan}
                      setWaktu_pesan={setWaktu_pesan}
                    />
                  ) : (
                    <></>
                  )}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack}>Kembali</Button>
                    )}

                    {activeStep === steps.length - 1 ? (
                      <Button variant="contained" onClick={handleCheckout}>
                        Pesan
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={handleNext}>
                        Selanjutnya
                      </Button>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;
