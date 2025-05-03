import React from 'react';
import { Row, Col, Typography } from 'antd';
import { 
  DownloadOutlined, 
  FormOutlined, 
  UserSwitchOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HowItWorks = () => {
  const steps = [
    {
      icon: <DownloadOutlined />,
      title: 'Téléchargez l\'application',
      description: 'Installez ServiLink sur votre smartphone et créez votre compte en quelques secondes avec une interface simple et intuitive.',
      color: '#4299e1'
    },
    {
      icon: <FormOutlined />,
      title: 'Décrivez votre besoin',
      description: 'Précisez le service dont vous avez besoin, votre localisation et vos disponibilités pour obtenir les meilleures correspondances.',
      color: '#f6ad55'
    },
    {
      icon: <UserSwitchOutlined />,
      title: 'Choisissez votre prestataire',
      description: 'Parcourez les profils, consultez les avis et sélectionnez le prestataire qui correspond parfaitement à vos attentes.',
      color: '#68d391'
    },
    {
      icon: <CheckCircleOutlined />,
      title: 'Réservez et profitez',
      description: 'Confirmez la réservation, payez en toute sécurité et bénéficiez du service demandé sans tracas administratifs.',
      color: '#fc8181'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Processus simple</div>
          <Title level={2} className="section-title">
            Comment <span>ça marche</span>
          </Title>
          <Paragraph className="section-description">
            En quelques étapes simples, connectez-vous avec le prestataire idéal pour votre projet.
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