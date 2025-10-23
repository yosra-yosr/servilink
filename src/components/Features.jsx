import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
  SearchOutlined, 
  StarOutlined, 
  CalendarOutlined, 
  CommentOutlined,
  SafetyOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Features = ({ isDedicatedPage = false }) => {
  const { t } = useTranslation(['features']);

  // Mapping des icônes selon les titres des fonctionnalités
  const featureIcons = {
    "Smart Search": <SearchOutlined className="feature-icon" />,
    "Verified Reviews": <StarOutlined className="feature-icon" />,
    "Instant Booking": <CalendarOutlined className="feature-icon" />,
    "Direct Communication": <CommentOutlined className="feature-icon" />,
    "Secure Payments": <SafetyOutlined className="feature-icon" />,
    "Geolocation": <EnvironmentOutlined className="feature-icon" />
  };

  // Couleurs pour les fonctionnalités
  const featureColors = [
    '#4299e1',
    '#f6ad55',
    '#68d391',
    '#fc8181',
    '#b794f4',
    '#4fd1c5'
  ];

  // Récupération des fonctionnalités depuis la traduction
  const featuresArray = t('features', { returnObjects: true });

  // Enrichissement des données avec les icônes et couleurs
  const features = featuresArray.map((feature, index) => ({
    ...feature,
    icon: featureIcons[feature.title],
    color: featureColors[index % featureColors.length]
  }));
const sectionId = isDedicatedPage ? undefined : "features";
  return (
    <section className="features" id={sectionId}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t('sectionTag')}</div>
          <Title level={2} className="section-title">
            {t('title')} <span>{t('titleHighlight')}</span>
          </Title>
          <Paragraph className="section-description">
            {t('description')}
          </Paragraph>
        </div>
        
        <div className="features-grid">
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <div className="feature-card">
                  <div className="feature-icon-wrapper" style={{ backgroundColor: `${feature.color}15` }}>
                    <div className="feature-icon-background" style={{ backgroundColor: feature.color }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <a href="https://www.example.com" className="feature-link">
                    {t('learnMore')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Features;