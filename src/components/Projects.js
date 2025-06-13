import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React and Material UI.',
    link: 'https://profile-site-phi.vercel.app'
  },
  {
    title: 'Task Manager',
    description: 'A React app to manage daily tasks using local storage.',
    link: 'https://github.com/yourusername/task-manager'
  },
  {
    title: 'Gospel Blog',
    description: 'A gospel music blog with artist uploads, blog posts, and ad placement features using React, Node.js, and MySQL.',
    link: 'https://gospel-music-blog.vercel.app/'
  },
  {
    title: 'Ecommerce Site',
    description: 'An ecommerce web app with product listing, cart, authentication, and payment integration using React and Firebase.',
    link: 'https://my-ecommerce-pages.vercel.app/'
  },
];

function getCardGradient(title, index) {
  switch (title) {
    case 'Gospel Blog':
      return 'linear-gradient(135deg, #61dafb, #21a1f1)';
    case 'Ecommerce Site':
      return 'linear-gradient(135deg, #f7df1e, #f0c000)';
    default:
      return index % 2 === 0
        ? 'linear-gradient(135deg, #00bcd4, #009688)'
        : 'linear-gradient(135deg, #7b4397, #dc2430)';
  }
}

function Projects() {
  return (
    <Box id="projects" my={5} px={2}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Dancing Script, cursive',
          mb: 4,
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 4,
                  background: getCardGradient(project.title, index),
                  color: 'white',
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: 'Shadows Into Light, cursive', fontWeight: 'bold' }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem', mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ pl: 2, pb: 2 }}>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    sx={{
                      color: '#fff',
                      border: '1px solid white',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                      },
                    }}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
