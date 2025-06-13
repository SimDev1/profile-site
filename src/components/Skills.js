import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const skills = [
  { name: 'React', color: 'linear-gradient(135deg, #61dafb, #21a1f1)' },
  { name: 'JavaScript', color: 'linear-gradient(135deg, #f7df1e, #f0c000)' },
  { name: 'HTML/CSS', color: 'linear-gradient(135deg, #ff5722, #ff9800)' },
  { name: 'mySQL', color: 'linear-gradient(135deg, #2e5722, #fe9800)' },
  { name: 'Material UI', color: 'linear-gradient(135deg, #0081cb, #00bcd4)' },
  { name: 'Git/GitHub', color: 'linear-gradient(135deg, #333333, #6e5494)' },
  { name: 'Node', color: 'linear-gradient(105deg, #433333, #034494)' },

];

function Skills() {
  return (
    <Box id="skills" my={5} px={2} mt={1}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: 'Dancing Script, cursive',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
        }}
      >
        My Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={10} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: 3,
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Shadows Into Light, cursive',
                background: skill.color,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              {skill.name}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
