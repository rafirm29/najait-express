import {
  Grid,
  Box,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle";

const testimonials = [
  {
    author: "Ujang",
    title: "Pelajar",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus suscipit diam eget dictum.`,
  },
  {
    author: "Ujang",
    title: "Pelajar",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus suscipit diam eget dictum.`,
  },
  {
    author: "Ujang",
    title: "Pelajar",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus suscipit diam eget dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus suscipit diam eget dictum.`,
  },
];

const TestimonialItems = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100%"
      spacing={2}
      px={2}
      mt={2}
    >
      {testimonials.map((testimonial) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: "12.5rem" }}>
              <CardHeader
                avatar={<Avatar />}
                title={
                  <Typography fontWeight="bold">
                    {testimonial.author}
                  </Typography>
                }
                subheader={testimonial.title}
              />
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant="subtitle2">
                  {testimonial.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const Testimonials = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#8ED1C0",
        pb: 4,
      }}
    >
      <SectionTitle text="Testimonials" />
      <TestimonialItems />
    </Grid>
  );
};

export default Testimonials;
