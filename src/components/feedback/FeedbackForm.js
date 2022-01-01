import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Button,
  TextField,
  Rating,
  Skeleton,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { fetchReviewOrder, submitReviewOrder } from '../../api/user.js';
import { getPenjahitById } from '../../api/penjahit.js';
import { useHistory } from 'react-router-dom';

function FeedbackForm() {
  const history = useHistory();

  const [rating, setRating] = useState(4);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [penjahit, setPenjahit] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    type: '',
    msg: '',
  });

  useEffect(async () => {
    try {
      const order = await fetchReviewOrder();
      if (!order) history.replace('/ordersaya');
      const penjahit = await getPenjahitById(order.inboundIdPenjahit);
      setOrder(`${order.Order.jenis} ${order.Order.pakaian}`);
      setPenjahit(penjahit.name);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const payload = {
      rating: rating,
      description: description,
    };
    let success;
    try {
      await submitReviewOrder(payload);
      success = true;
    } catch (error) {
      console.error(error);
      success = false;
    } finally {
      setSubmitLoading(false);
      setSnackbarState({
        open: true,
        type: success === true ? 'success' : 'error',
        msg:
          success === true
            ? 'Thank you for the feedback!'
            : 'Failed to submit feedback',
      });
      if (success) {
        setTimeout(() => {
          window.location.href = '/ordersaya';
        }, 2000);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  return (
    <>
      <Box
        my={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant="h6" fontFamily="Montserrat" my={2}>
              Feedback dari anda dapat meningkatkan kualitas pelayanan kami
              menjadi lebih baik
            </Typography>
            <Typography variant="h7" fontFamily="Montserrat" my={2}>
              Berapakah tingkat kepuasan anda terhadap pesanan anda sebelumnya?
            </Typography>
            <Paper sx={{ padding: 1, marginTop: 2 }}>
              <Typography fontFamily="Montserrat" gutterBottom>
                Pesanan anda: {loading ? <Skeleton /> : order}
              </Typography>
              <Typography fontFamily="Montserrat">
                Penjahit: {loading ? <Skeleton /> : penjahit}
              </Typography>
            </Paper>
            <Box
              my={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Rating
                name="rating"
                value={rating}
                sx={{ color: '#266679' }}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Box>
            <Typography variant="h7" fontFamily="Montserrat" my={1}>
              Berikan komentar, kritik, dan saran anda terhadap website ini
            </Typography>

            <TextField
              multiline
              rows={4}
              id="standard-basic"
              label="Feedback"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ width: '100%', marginTop: '1rem' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '2rem 0',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                justify="center"
                onClick={handleSubmit}
                sx={{
                  width: '100px',
                  margin: '0 18px',
                  fontWeight: 700,
                }}
              >
                Kirim
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={submitLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        open={snackbarState.open}
        onClose={handleCloseSnackbar}
      >
        <Alert severity={snackbarState.type}>{snackbarState.msg}</Alert>
      </Snackbar>
    </>
  );
}

export default FeedbackForm;
