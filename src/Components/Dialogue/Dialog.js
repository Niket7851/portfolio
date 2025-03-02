import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CloseIcon from '@mui/icons-material/Close';
import Snack from '../../config/Snack';

const Dialog = ({ open, handelOpen }) => {
  // Create a ref for the form
  const form = useRef();

  // Local state for loading, form data, and snackbar state
  const [isLoading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update state on form input change
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Function to send email using EmailJS
  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        'service_r8lte1u',        // Replace with your service ID
        'template_erfail9',       // Replace with your template ID
        form.current,
        'dD3HOm7WbZe4jg-T5'       // Replace with your public key
      );
    } catch (error) {
      console.error('EmailJS FAILED:', error.text);
    }
  };

  // Combined submit handler: sends data to backend then calls EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send form data to your backend
      const response = await axios.post('http://localhost:8000/user/message', data);
      // After backend call succeeds, send the email using EmailJS
      await sendEmail();

      // Clear form (optional)
      setData({
        name: '',
        email: '',
        message: '',
      });

      // Close the modal
      handelOpen(false);

      // Open the success snackbar
      setSnackOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setLoading(false);
  };

  // Snackbar close handler
  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackOpen(false);
  };

  return (
    <div>
      <Modal open={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            <div className='flex justify-between'>
              <h1>Register</h1>
              <Button color="success" onClick={() => handelOpen(false)}>
                <CloseIcon className='cursor-pointer' />
              </Button>
            </div>
          </Typography>
          {/* The form uses the ref and onSubmit handler */}
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              onChange={onChangeHandler}
              value={data.name}
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              onChange={onChangeHandler}
              value={data.email}
            />
            <TextField
              required
              label="Message/Query"
              name="message"
              rows={4}
              fullWidth
              margin="normal"
              multiline
              onChange={onChangeHandler}
              value={data.message}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Box>
      </Modal>
      {/* Pass the function reference, not its result */}
      <Snack open={snackOpen} onClose={handleSnackClose} />
    </div>
  );
};

export default Dialog;
