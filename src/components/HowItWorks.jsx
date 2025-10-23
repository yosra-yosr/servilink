import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
  DownloadOutlined, 
  FormOutlined, 
  UserSwitchOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const HowItWorks = ({ isDedicatedPage = false }) => {
  const { t } = useTranslation(['how-it-works']);

  // Icons pour les différentes étapes
  const stepIcons = [
    <DownloadOutlined />,
    <FormOutlined />,
    <UserSwitchOutlined />,
    <CheckCircleOutlined />
  ];

  // Couleurs pour les différentes étapes
  const stepColors = [
    '#4299e1',
    '#f6ad55',
    '#68d391',
    '#fc8181'
  ];

  // Récupération des étapes depuis la traduction
  const stepsArray = t('steps', { returnObjects: true });

  // Enrichissement des données avec les icônes et couleurs
  const steps = stepsArray.map((step, index) => ({
    ...step,
    icon: stepIcons[index % stepIcons.length],
    color: stepColors[index % stepColors.length]
  }));
const sectionId = isDedicatedPage ? undefined : "how-it-works";
  return (
    <section className="how-it-works" id={sectionId}>
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
        
        <div className="steps-content">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <Row gutter={[48, 48]}>
              {steps.map((step, index) => (
                <Col xs={24} md={12} key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-card">
                    <div className="step-number" style={{ backgroundColor: step.color }}>
                      {index + 1}
                    </div>
                    <div className="timeline-icon" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                      {step.icon}
                    </div>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-description">{step.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          
          <Row gutter={[24, 24]} className="steps-row">
            {steps.map((step, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div className="step-card" style={{ borderTop: `3px solid ${step.color}` }}>
                  <div className="step-icon-container">
                    <div className="step-icon" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                      {step.icon}
                    </div>
                    <div className="step-number-mobile" style={{ backgroundColor: step.color }}>
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="process-image">
          <img src="/api/placeholder/800/400" alt="Process illustration" className="process-img" />
          <div className="process-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;