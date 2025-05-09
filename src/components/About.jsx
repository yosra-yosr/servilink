import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { MobileOutlined, TeamOutlined, SafetyOutlined, StarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation(['about']);

  const companyValues = [
    {
      icon: <MobileOutlined className="about-card-icon" />,
      title: t('values.innovation.title'),
      description: t('values.innovation.description')
    },
    {
      icon: <TeamOutlined className="about-card-icon" />,
      title: t('values.community.title'),
      description: t('values.community.description')
    },
    {
      icon: <SafetyOutlined className="about-card-icon" />,
      title: t('values.trust.title'),
      description: t('values.trust.description')
    },
    {
      icon: <StarOutlined className="about-card-icon" />,
      title: t('values.quality.title'),
      description: t('values.quality.description')
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-shape about-shape-1"></div>
      <div className="about-shape about-shape-2"></div>
      
      <div className="container">
        <div className="section-header text-center">
          <Title level={2} className="section-title">
            {t('title')}
          </Title>
          <Paragraph className="section-subtitle">
            {t('subtitle')}
          </Paragraph>
        </div>
        
        <Row gutter={[48, 48]} align="middle" className="about-main">
          <Col xs={24} lg={12}>
            <div className="about-content">
              <Title level={3} className="about-content-title">
                {t('company.title')}
              </Title>
              
              <Paragraph className="about-description">
                {t('company.description')}
              </Paragraph>
              
              <Paragraph className="about-mission">
                {t('company.mission')}
              </Paragraph>
              
              <div className="about-stats">
                <Row gutter={[24, 24]}>
                  <Col xs={8}>
                    <div className="about-stat-item">
                      <div className="about-stat-value">{t('stats.year')}</div>
                      <div className="about-stat-label">{t('stats.founded')}</div>
                    </div>
                  </Col>
                  <Col xs={8}>
                    <div className="about-stat-item">
                      <div className="about-stat-value">{t('stats.services')}</div>
                      <div className="about-stat-label">{t('stats.offered')}</div>
                    </div>
                  </Col>
                  <Col xs={8}>
                    <div className="about-stat-item">
                      <div className="about-stat-value">{t('stats.cities')}</div>
                      <div className="about-stat-label">{t('stats.presence')}</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          
          <Col xs={24} lg={12} className="about-image-col">
            <div className="about-image-container">
              <img src="/images/about-app.png" alt="ServiLink App" className="about-image" />
              <div className="about-image-overlay"></div>
            </div>
          </Col>
        </Row>
        
        <Title level={3} className="about-values-title text-center">
          {t('values.title')}
        </Title>
        
        <Row gutter={[24, 24]} className="about-values">
          {companyValues.map((value, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className="about-card">
                <div className="about-card-icon-wrapper">
                  {value.icon}
                </div>
                <Title level={4} className="about-card-title">
                  {value.title}
                </Title>
                <Paragraph className="about-card-description">
                  {value.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        
        
      </div>
    </section>
  );
};

export default About;