import React, { useEffect } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

// Import Ant Design locales
import enUS from 'antd/lib/locale/en_US';
import frFR from 'antd/lib/locale/fr_FR';
import arEG from 'antd/lib/locale/ar_EG';

const App = () => {
  const { i18n } = useTranslation();

  // Map language codes to Ant Design locales
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

  // Set direction based on language
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';

  // Add specific CSS for RTL support
  useEffect(() => {
    // Optional: You can load a specific CSS file for RTL support
    if (i18n.language === 'ar') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [i18n.language]);

  return (
    <ConfigProvider locale={getAntLocale()} direction={direction}>
      <Layout className={`layout ${direction === 'rtl' ? 'rtl' : ''}`}>
        <Header />
        <Layout.Content>
          <Hero />
          {/* <About/> */}
          <Features />
          <HowItWorks />
          <Testimonials />
          <Download />
        </Layout.Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default App;