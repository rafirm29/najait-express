import { Typography, Box } from '@mui/material';
import React from 'react';

const SectionTitle = ({ text, dark }) => {
  return (
    <Box
      mt={4}
      px={2}
      py={1}
      height="fit-content"
      borderRadius={4}
      sx={
        dark
          ? {
              background: `linear-gradient(rgba(10,10,10,0.1), rgba(10,10,10,0.1))`,
            }
          : {
              background: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))`,
            }
      }
    >
      <Typography
        variant="h4"
        fontFamily="Montserrat, sans-serif"
        color="primary"
        fontWeight="bolder"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
