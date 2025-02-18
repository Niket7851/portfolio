import { Snackbar } from '@mui/material';
import React from 'react';

const Snack = ({ open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      message="Form submitted successfully!"
      sx={{ position: 'fixed' }}
    />
  );
};

export default Snack;
