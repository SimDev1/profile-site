import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

function Hero() {
  return (
    <Box textAlign="center" my={5} mb={8}>
      <Avatar
        alt="Anyanwu Simeon"
        src="/profile.png"
        sx={{
          width: 140,
          height: 140,
          margin: 'auto',
          border: '3px solid white',
        }}
      />
      <Typography
        variant="h3"
        mt={2}
        sx={{
          fontFamily: 'Roboto, Inter, sans-serif',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Hi, I'm Anyanwu Simeon
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Inter, Roboto, sans-serif',
          color: 'white',
          mt: 1,
        }}
      >
        Full-Stack Developer | React & Node Enthusiast
      </Typography>
    </Box>
  );
}

export default Hero;
