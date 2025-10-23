import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Layout, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import SchemaOrg from './components/SchemaOrg';
import './App.css';

// Importez le nouveau composant Home
import Home from './pages/Home'; 

// Importez les composants qui deviendront des pages dédiées
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';

// Import Ant Design locales
import enUS from 'antd/lib/locale/en_US';
import frFR from 'antd/lib/locale/fr_FR';
import arEG from 'antd/lib/locale/ar_EG';

const App = () => {
  const { i18n } = useTranslation();

  const getAntLocale = () => {
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

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [i18n.language]);

  return (
    <HelmetProvider>
      <ConfigProvider locale={getAntLocale()} direction={direction}>
        <Router>
          <SchemaOrg />
          <Layout className={`layout ${direction}-layout`}>
            <Header />
            <Layout.Content>
              <Routes>
                <Route path="/" element={<Home />} />
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
              </Routes>
            </Layout.Content>
            <Footer />
          </Layout>
        </Router>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default App;