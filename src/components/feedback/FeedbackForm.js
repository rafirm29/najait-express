import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  TextField,
  Rating,
} from "@mui/material";

function FeedbackForm() {
  const [rating, setRating] = useState(4);

  return (
    <Box
      my={2}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ maxWidth: 600 }}>
        {/* <Grid
          container
          p={2}
          columnSpacing={2}
          sx={{ backgroundColor: "red" }}
          justify="center"
          alignItems="center"
        > */}
        {/* <Grid item xs={7}>
            <CardContent>
              <Typography variant="h6" fontFamily="Montserrat" my={1}>
                Feedback dari anda dapat meningkatkan kualitas website kami
                menjadi lebih baik
              </Typography>
              <Typography variant="h6" fontFamily="Montserrat" my={1}>
                Feedback dari anda dapat meningkatkan kualitas website kami
                menjadi lebih baik
              </Typography>
            </CardContent>
          </Grid>
        </Grid> */}

        <CardContent>
          <Typography variant="h6" fontFamily="Montserrat" my={2}>
            Feedback dari anda dapat meningkatkan kualitas website kami menjadi
            lebih baik
          </Typography>
          <Typography variant="h7" fontFamily="Montserrat" my={2}>
            Berapakah tingkat kepuasan anda menggunakan website ini?
          </Typography>
          <Box
            my={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Rating
              name="rating"
              value={rating}
              sx={{ color: "#266679" }}
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
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              justify="center"
              sx={{
                width: "100px",
                margin: "0 18px",
                fontWeight: 700,
              }}
            >
              Kirim
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FeedbackForm;
