import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Vision from './components/Vision';
import Section from './components/Section';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
        <Navbar />
        <HeroSection />
        <Vision />
        <Section />
        <Solutions />
        <Footer />
    </>
  );
}

export default App;
