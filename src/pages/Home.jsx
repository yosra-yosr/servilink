import React from 'react';
import Hero from '../components/Hero';
import SEOHead from '../components/SEOHead';
// Ce composant représente la page d'accueil qui contient toutes les sections
// navigables par défilement (scroll-link) depuis le Header.
const Home = () => {
  return (
    <>
    <SEOHead 
        title="Plateforme de Services Locaux"
        description="Connectez-vous aux meilleurs professionnels de services locaux. Réservation facile, paiement sécurisé."
        keywords="services locaux, professionnels, réservation, plombier, électricien, Tunisie"
      />
      <Hero />
    </>
  );
};

export default Home;