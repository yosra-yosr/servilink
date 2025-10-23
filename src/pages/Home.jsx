import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Download from '../components/Download';
// import About from '../components/About'; // Si About est une section de la page d'accueil

// Ce composant représente la page d'accueil qui contient toutes les sections
// navigables par défilement (scroll-link) depuis le Header.
const Home = () => {
  return (
    <>
      <Hero />
      {/* <Features />
      <HowItWorks />
      <Testimonials />
      <Download /> */}
      {/* <About /> */}
    </>
  );
};

export default Home;