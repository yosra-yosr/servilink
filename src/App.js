import React, { useEffect } from 'react';
// Importez les outils de routage de React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Layout, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Importez le nouveau composant Home
import Home from './pages/Home'; 

// Importez les composants qui deviendront des pages dédiées
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

// Import Ant Design locales (Logique non modifiée)
import enUS from 'antd/lib/locale/en_US';
import frFR from 'antd/lib/locale/fr_FR';
import arEG from 'antd/lib/locale/ar_EG';

const App = () => {
  const { i18n } = useTranslation();

  // Logique de langue et direction inchangée
  const getAntLocale = () => { /* ... */ 
    switch (i18n.language) {
      case 'fr':
        return frFR;
      case 'ar':
        return arEG;
      case 'en':
      default:
        return enUS;
    }
  };
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => { /* ... */ 
    if (i18n.language === 'ar') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [i18n.language]);

  return (
    // Enveloppez l'application avec Router pour activer le routage
    <ConfigProvider locale={getAntLocale()} direction={direction}>
      <Router>
        <Layout className={`layout ${direction}-layout`}>
          {/* Header et Footer restent à l'extérieur des Routes pour être présents sur toutes les pages */}
          <Header />
          <Layout.Content>
            <Routes>
              {/* Route pour la page d'accueil, utilisant le nouveau composant Home */}
              <Route path="/" element={<Home />} />
              
              {/* Routes pour les pages dédiées (passage d'une prop pour l'adapter si besoin) */}
              <Route 
                path="/features" 
                element={<Features isDedicatedPage={true} />} 
              />
              <Route 
                path="/how-it-works" 
                element={<HowItWorks isDedicatedPage={true} />} 
              />
              <Route 
                path="/testimonials" 
                element={<Testimonials isDedicatedPage={true} />} 
              />
              
              {/* Vous pouvez ajouter une Route pour la page About si elle devient une page dédiée aussi */}
              {/* <Route path="/about" element={<About isDedicatedPage={true} />} /> */}

            </Routes>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;