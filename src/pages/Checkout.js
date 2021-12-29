import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import CheckoutForm from '../components/checkout/CheckoutForm';
import ReviewOrder from '../components/checkout/ReviewOrder';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CONFIG from '../config';

const steps = ['Formulir Pemesanan', 'Review Pemesanan'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CheckoutForm />;
    case 1:
      return <ReviewOrder />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${CONFIG.API_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response) {
          const { data } = response;
          console.log(data);
        } else {
          history.replace('/login');
        }
      } else {
        history.replace('/login');
      }
    } catch (err) {
      history.replace('/login');
    }
  }, []);

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack}>Back</Button>
                    )}

                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
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
