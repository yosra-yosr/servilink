import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import { AppleOutlined, AndroidOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Download = () => {
  const benefits = [
    "Accès à plus de 1200 prestataires vérifiés",
    "Interface intuitive et facile à utiliser",
    "Service client disponible 7j/7",
    "Mises à jour régulières avec de nouvelles fonctionnalités"
  ];

  return (
    <section className="download" id="download">
      <div className="download-shape download-shape-1"></div>
      <div className="download-shape download-shape-2"></div>
      <div className="download-shape download-shape-3"></div>
      
      <div className="container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="download-content">
              <div className="download-badge">
                <span>Disponible maintenant</span>
              </div>
              
              <Title level={2} className="download-title">
                Prêt à simplifier votre recherche de services?
              </Title>
              
              <Paragraph className="download-description">
                Téléchargez ServiLink dès maintenant et connectez-vous avec les meilleurs prestataires de votre région en quelques clics. Rejoignez notre communauté grandissante d'utilisateurs satisfaits.
              </Paragraph>
              
              <div className="download-features">
                {benefits.map((benefit, index) => (
                  <div className="download-feature-item" key={index}>
                    <CheckCircleOutlined className="download-feature-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="download-buttons">
                <Button 
                  type="primary" 
                  icon={<AndroidOutlined />} 
                  size="large" 
                  className="download-btn android-btn"
                >
                  <div>
                    <span>TÉLÉCHARGER SUR</span>
                    <p>Google Play</p>
                  </div>
                </Button>
                <Button 
                  type="primary" 
                  icon={<AppleOutlined />} 
                  size="large" 
                  className="download-btn apple-btn"
                >
                  <div>
                    <span>TÉLÉCHARGER SUR</span>
                    <p>App Store</p>
                  </div>
                </Button>
              </div>
            </div>
          </Col>
          
          <Col xs={24} lg={12} className="download-image-col">
            <div className="download-image-container">
              <div className="download-phone-mockup">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              <div className="download-phone-mockup download-phone-second">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              <div className="download-badge-floating download-badge-1">
                <div className="download-badge-icon">⭐</div>
                <span>4.8/5</span>
              </div>
              <div className="download-badge-floating download-badge-2">
                <div className="download-badge-icon">🚀</div>
                <span>Rapide</span>
              </div>
              <div className="download-badge-floating download-badge-3">
                <div className="download-badge-icon">👍</div>
                <span>Fiable</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Download;