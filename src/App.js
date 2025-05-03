import React, { useEffect } from 'react';
import { Layout } from 'antd';// OU 'antd/dist/antd.css' selon votre version d'Ant Design
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Download />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default App;