import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Contact() {
  return (
    <Box id="contact" my={5} px={2}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Dancing Script, cursive',
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Contact
      </Typography>

      <Typography
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          fontFamily: 'Montserrat, sans-serif',
          mb: 1,
        }}
      >
        Email: simeonanyanwu00@gmail.com
      </Typography>

      <Typography
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          fontFamily: 'Montserrat, sans-serif',
          mb: 1,
        }}
      >
        GitHub:{' '}
        <Link
          href="https://github.com/simdev1"
          target="_blank"
          sx={{
            color: '#00e676',
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          SimDev1
        </Link>
      </Typography>

      <Typography
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        LinkedIn:{' '}
        <Link
          href="https://linkedin.com/in/anyanwu-simeon"
          target="_blank"
          sx={{
            color: '#2196f3',
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          SimDev1
        </Link>
      </Typography>
    </Box>
  );
}

export default Contact;
