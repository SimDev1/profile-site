import React from 'react';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
