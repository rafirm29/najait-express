import { Container, Typography } from "@mui/material";
import React from "react";
import FeedbackForm from "../components/feedback/FeedbackForm";

const FeedbackContent = () => {
  return (
    <>
      <Typography variant="h4" my={3}>
        Feedback
      </Typography>
      <FeedbackForm />
    </>
  );
};

const Feedback = () => {
  return (
    <Container>
      <FeedbackContent />
    </Container>
  );
};

export default Feedback;
