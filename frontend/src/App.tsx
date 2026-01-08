import React from 'react';
import Navbar from './components/Navbar';
import TechMarquee from './components/TechMarquee';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-primary-600 selection:text-white overflow-x-hidden font-sans">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <TechMarquee />
        <Footer />
      </div>
    </div>
  );
};

export default App;