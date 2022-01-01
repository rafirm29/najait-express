import {
  Button,
  Card,
  Grid,
  Skeleton,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { fetchCurrentUser, updateUserProfile } from '../../api/user';
import CONFIG from '../../config';

function EditProfileForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    type: '',
    msg: '',
  });

  const [profileData, setProfileData] = useState({
    image: null,
    firstName: null,
    lastName: null,
    address: null,
    kodePos: null,
    phone: null,
  });
  const [error, setError] = useState({
    firstName: null,
    lastName: null,
    password: null,
    address: null,
    kodePos: null,
    phone: null,
  });

  const checkError = () => {
    for (const field in error) {
      if (Object.hasOwnProperty.call(error, field)) {
        if (error[field] != null) {
          return true;
        }
      }
    }
    return false;
  };

  const handleChange = (e) => {
    const target = e.target;
    switch (target.name) {
      case 'firstName':
        if (target.value.length === 0) {
          setError({ ...error, firstName: 'First name cannot be empty' });
        } else if (target.value.length > 20) {
          setError({
            ...error,
            firstName: 'First name cannot be more than 20 characters',
          });
        } else if (!/^[a-z ,.'-]+$/i.test(target.value)) {
          setError({ ...error, firstName: 'Please enter a valid name' });
        } else {
          setError({ ...error, firstName: null });
        }
        setProfileData({ ...profileData, firstName: target.value });
        break;
      case 'lastName':
        if (target.value.length === 0) {
          setError({ ...error, lastName: 'Last name cannot be empty' });
        } else if (target.value.length > 20) {
          setError({
            ...error,
            lastName: 'Last name cannot be more than 20 characters',
          });
        } else if (!/^[a-z ,.'-]+$/i.test(target.value)) {
          setError({ ...error, lastName: 'Please enter a valid name' });
        } else {
          setError({ ...error, lastName: null });
        }
        setProfileData({ ...profileData, lastName: target.value });

        break;
      case 'address':
        if (target.value.length === 0) {
          setError({ ...error, address: 'Address cannot be empty' });
        } else {
          setError({ ...error, address: null });
        }
        setProfileData({ ...profileData, address: target.value });

        break;
      case 'kodePos':
        if (!/^(\d{5})?$/.test(target.value)) {
          setError({
            ...error,
            kodePos: 'Please enter a valid post code or empty',
          });
        } else {
          setError({ ...error, kodePos: null });
        }
        setProfileData({ ...profileData, kodePos: target.value });

        break;
      case 'phone':
        if (target.value.length === 0) {
          setError({ ...error, phone: 'Phone number cannot be empty' });
        } else if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/im.test(
            target.value
          )
        ) {
          setError({ ...error, phone: 'Please enter a valid phone number' });
        } else {
          setError({ ...error, phone: null });
        }
        setProfileData({ ...profileData, phone: target.value });

        break;

      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const payload = new FormData();
    if (selectedImage) {
      payload.append('image', selectedImage);
    }
    payload.append('first_name', profileData.firstName);
    payload.append('last_name', profileData.lastName);
    payload.append('address', profileData.address);
    payload.append('phone', profileData.phone);

    setSubmitLoading(true);
    let success;
    try {
      await updateUserProfile(payload);
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
            ? 'Successfully updated profile'
            : 'Failed to update profile',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  useEffect(async () => {
    try {
      const { user } = await fetchCurrentUser();
      const { first_name, last_name, address, phone, picture } = user;
      setProfileData({
        ...profileData,
        firstName: first_name,
        lastName: last_name,
        address,
        phone,
      });
      if (picture) {
        setImageUrl(`${CONFIG.API_URL}/${picture}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Box my={2}>
        <Card>
          <Grid
            container
            component="form"
            encType="multipart/form-data"
            autoComplete="off"
            p={2}
            columnSpacing={2}
            alignItems="center"
            justifyContent="center"
            onSubmit={handleSubmit}
          >
            {loading ? (
              <Skeleton variant="rectangular" w="100%" h={216} />
            ) : (
              <>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {imageUrl || selectedImage ? (
                    <Box>
                      <img
                        src={imageUrl}
                        alt={imageUrl}
                        style={{
                          height: '200px',
                          width: '200px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        height: '200px',
                        width: '200px',
                        borderRadius: '50%',
                        backgroundColor: 'gray',
                      }}
                    ></Box>
                  )}
                </Grid>

                <Grid item xs={6} justifySelf="center">
                  <Box>
                    <input
                      accept="image/*"
                      type="file"
                      id="select-image"
                      style={{ display: 'none' }}
                      onChange={(e) => setSelectedImage(e.target.files[0])}
                    />
                    <label htmlFor="select-image">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Upload Image
                      </Button>
                    </label>
                    <Box mt={1}>
                      <Typography
                        variant="h10"
                        fontFamily="Montserrat"
                        color="gray"
                      >
                        Format gambar yang diterima adalah .jpg dan .png Ukuran
                        file maksimal adalah 1MB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} mt={4} justifySelf="center">
                  <TextField
                    id="standard-basic"
                    label="Nama Depan"
                    name="firstName"
                    variant="outlined"
                    value={profileData.firstName}
                    onChange={handleChange}
                    error={error.firstName}
                    helperText={error.firstName || ' '}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={6} mt={4} justifySelf="center">
                  <TextField
                    id="standard-basic"
                    label="Nama Belakang"
                    name="lastName"
                    variant="outlined"
                    value={profileData.lastName}
                    onChange={handleChange}
                    error={error.lastName}
                    helperText={error.lastName || ' '}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} mt={2} justifySelf="center">
                  <TextField
                    multiline
                    rows={4}
                    id="standard-basic"
                    label="Alamat"
                    name="address"
                    variant="outlined"
                    value={profileData.address}
                    onChange={handleChange}
                    error={error.address}
                    helperText={error.address || ' '}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={6} my={2} justifySelf="center">
                  <TextField
                    id="standard-basic"
                    label="Kode Pos"
                    name="kodePos"
                    variant="outlined"
                    value={profileData.kodePos}
                    onChange={handleChange}
                    error={error.kodePos}
                    helperText={error.kodePos || ' '}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={6} my={2} justifySelf="center">
                  <TextField
                    id="standard-basic"
                    label="Nomor Ponsel"
                    name="phone"
                    variant="outlined"
                    value={profileData.phone}
                    onChange={handleChange}
                    error={error.phone}
                    helperText={error.phone || ' '}
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  my={2}
                  justifySelf="center"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    onClick={
                      checkError()
                        ? () => {
                            setSnackbarState({
                              open: true,
                              type: 'error',
                              msg: 'Please fill in the correct field',
                            });
                          }
                        : handleSubmit
                    }
                  >
                    Simpan
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
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

export default EditProfileForm;
