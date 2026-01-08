import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};