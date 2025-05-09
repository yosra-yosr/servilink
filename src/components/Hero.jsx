import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { AppleOutlined, AndroidOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Hero = () => {
  const { t } = useTranslation(['hero']);

  const features = [
    t('features.verified'),
    t('features.booking'),
    t('features.payment')
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
              <span>{t('badge')}</span>
            </div>
            
            <Title level={1} className="hero-title">
              {t('title')} <span className="highlight">{t('titleHighlight')}</span>
            </Title>
            
            <Paragraph className="hero-description">
              {t('description')}
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
                  <span>{t('downloadOn')}</span>
                  <p>{t('googlePlay')}</p>
                </div>
              </Button>
              <Button type="primary" icon={<AppleOutlined />} size="large" className="app-btn apple-btn">
                <div>
                  <span>{t('downloadOn')}</span>
                  <p>{t('appStore')}</p>
                </div>
              </Button>
            </div>
            
            <div className="stats-container">
              <Row gutter={[24, 24]} className="stats-row">
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">5000+</div>
                    <div className="stat-label">{t('stats.users')}</div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">1200+</div>
                    <div className="stat-label">{t('stats.providers')}</div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="stat-item">
                    <div className="stat-value">4.8/5</div>
                    <div className="stat-label">{t('stats.satisfaction')}</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          
          {/* <Col xs={24} md={12} className="hero-image-container">
            <div className="phone-mockup">
              <div className="phone-frame">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="phone-screen" />
              </div>
              <div className="floating-element floating-1">
                <div className="floating-icon">✓</div>
                <span>{t('badges.fast')}</span>
              </div>
              <div className="floating-element floating-2">
                <div className="floating-icon">🔒</div>
                <span>{t('badges.secure')}</span>
              </div>
              <div className="floating-element floating-3">
                <div className="floating-icon">⭐</div>
                <span>{t('badges.quality')}</span>
              </div>
            </div>
          </Col> */}
          <Col xs={24} lg={12} className="download-image-col">
            <div className="download-image-container">
              <div className="download-phone-mockup">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              <div className="download-phone-mockup download-phone-second">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              
              <div className="floating-element floating-1">
                          <div className="floating-icon">✓</div>
                          <span>{t('badges.fast')}</span>
                        </div>
                        <div className="floating-element floating-2">
                          <div className="floating-icon">🔒</div>
                          <span>{t('badges.secure')}</span>
                        </div>
                        <div className="floating-element floating-3">
                          <div className="floating-icon">⭐</div>
                          <span>{t('badges.quality')}</span>
                        </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;