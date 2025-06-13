import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 3,
        px: 2,
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to right, #2a2a2a, #3a3a3a)', // Harmonized with Navbar
        color: 'white',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} SimDev. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Connect on{' '}
        <Link href="https://github.com/simdev1" target="_blank" underline="hover" color="inherit">
          GitHub
        </Link>{' '}
        |{' '}
        <Link href="https://linkedin.com/in/anyanwu-simeon" target="_blank" underline="hover" color="inherit">
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
