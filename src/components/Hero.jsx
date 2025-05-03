import React from 'react';
import { Row, Col, Typography, Button, Statistic } from 'antd';
import { AppleOutlined, AndroidOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero = () => {
  const features = [
    'Trouvez des prestataires vérifiés près de chez vous',
    'Réservez en quelques clics',
    'Paiement sécurisé et transparent'
  ];

  return (
    <section className="hero" id="hero">
      <div className="glass-effect"></div>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      
      <div className="container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12} className="hero-content">
            <div className="badge">
              <span>Nouvelle Application</span>
            </div>
            
            <Title level={1} className="hero-title">
              Vos services à domicile <span className="highlight">en un instant</span>
            </Title>
            
            <Paragraph className="hero-description">
              ServiLink connecte les prestataires qualifiés avec des clients en quête de solutions professionnelles. 
              Simple, rapide et fiable pour tous vos besoins quotidiens.
            </Paragraph>
            
            <div className="hero-features">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <CheckCircleOutlined className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="app-buttons">
              <Button type="primary" icon={<AndroidOutlined />} size="large" className="app-btn android-btn">
                <div>
                  <span>TÉLÉCHARGER SUR</span>
                  <p>Google Play</p>
                </div>
              </Button>
              <Button type="primary" icon={<AppleOutlined />} size="large" className="app-btn apple-btn">
                <div>
                  <span>TÉLÉCHARGER SUR</span>
                  <p>App Store</p>
                </div>
              </Button>
            </div>
            
            <div className="stats-container">
              <Row gutter={[24, 24]} className="stats-row">
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">5000+</div>
                    <div className="stat-label">Utilisateurs</div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">1200+</div>
                    <div className="stat-label">Prestataires</div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">4.8/5</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          
          <Col xs={24} md={12} className="hero-image-container">
            <div className="phone-mockup">
              <div className="phone-frame">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="phone-screen" />
              </div>
              <div className="floating-element floating-1">
                <div className="floating-icon">✓</div>
                <span>Rapide</span>
              </div>
              <div className="floating-element floating-2">
                <div className="floating-icon">🔒</div>
                <span>Sécurisé</span>
              </div>
              <div className="floating-element floating-3">
                <div className="floating-icon">⭐</div>
                <span>Qualitatif</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;