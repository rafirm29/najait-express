import { Button, Container, Typography } from "@mui/material";
import React from "react";
import EditProfileForm from "../components/editprofile/EditProfileForm";

const EditProfileContent = () => {
  return (
    <>
      <Typography variant="h4" my={3}>
        Edit Profile
      </Typography>
      <EditProfileForm />
    </>
  );
};

const EditProfile = () => {
  return (
    <Container>
      <EditProfileContent />
    </Container>
  );
};

export default EditProfile;
