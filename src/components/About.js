import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      id="about"
      my={5}
      mb={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={2}
      sx={{
        perspective: 1000,
        minHeight: '500px',
        zIndex: 1,
      }}
    >
      {/* Card Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          height: 'auto',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s',
          transform: flipped ? 'rotateY(180deg)' : 'none',
          mb: 3, // space below card before button
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            position: 'relative',
            width: '100%',
            backfaceVisibility: 'hidden',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #ff5722, #ff9800)',
            color: 'white',
            padding: 4,
            minHeight: 300,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: 'Dancing Script, cursive',
                color: '#fdd835',
                fontWeight: 'bold',
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Shadows Into Light, cursive',
                fontSize: '1.2rem',
              }}
            >
              I'm a creative front-end developer with a deep passion for building smooth, interactive, and visually appealing web experiences.
              <br /><br />
              I enjoy crafting clean and intuitive user interfaces, combining design with functionality to bring ideas to life on the web.
            </Typography>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          sx={{
            position: 'absolute',
            top: 0,
            width: '100%',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            borderRadius: 4,
            background: 'linear-gradient(135deg, #7b4397, #dc2430)',
            color: 'white',
            padding: 4,
            minHeight: 300,
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Shadows Into Light, cursive',
                fontSize: '1.2rem',
              }}
            >
              My skill set includes:
              <br /><br />
              <strong>Front-End:</strong> HTML, CSS, JavaScript, React.js – creating dynamic, responsive, and user-friendly interfaces.
              <br /><br />
              <strong>Back-End:</strong> Node.js – developing RESTful APIs and integrating front-end apps with powerful server-side logic.
              <br /><br />
              <strong>Styling:</strong> Expert in using Material UI and Tailwind CSS to build clean, modern, and responsive designs that elevate user experience.
              <br /><br />
              I'm continuously learning and exploring new web technologies to stay ahead and deliver the best solutions.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Flip Button */}
      <Button
        variant="contained"
        onClick={() => setFlipped(!flipped)}
        sx={{
          background: 'linear-gradient(45deg, #ff9800, #f44336)',
          color: 'white',
          fontFamily: 'Dancing Script, cursive',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          px: 4,
          py: 1,
          '&:hover': {
            background: 'linear-gradient(45deg, #f44336, #ff9800)',
          },
        }}
      >
        {flipped ? 'Go Back' : 'Learn More'}
      </Button>
    </Box>
  );
}

export default About;
