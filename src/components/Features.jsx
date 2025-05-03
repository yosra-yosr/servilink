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

const { Title, Paragraph } = Typography;

const Features = () => {
  const features = [
    {
      icon: <SearchOutlined className="feature-icon" />,
      title: 'Recherche intelligente',
      description: 'Trouvez rapidement le prestataire idéal grâce à notre algorithme de correspondance avancé basé sur vos besoins spécifiques.',
      color: '#4299e1'
    },
    {
      icon: <StarOutlined className="feature-icon" />,
      title: 'Évaluations vérifiées',
      description: 'Consultez les avis et notations des clients précédents pour faire un choix éclairé et en toute confiance.',
      color: '#f6ad55'
    },
    {
      icon: <CalendarOutlined className="feature-icon" />,
      title: 'Réservation instantanée',
      description: 'Prenez rendez-vous directement via l\'application et recevez une confirmation immédiate de votre prestataire.',
      color: '#68d391'
    },
    {
      icon: <CommentOutlined className="feature-icon" />,
      title: 'Communication directe',
      description: 'Discutez en temps réel avec vos prestataires pour clarifier vos besoins et obtenir des devis personnalisés.',
      color: '#fc8181'
    },
    {
      icon: <SafetyOutlined className="feature-icon" />,
      title: 'Paiements sécurisés',
      description: 'Effectuez vos transactions en toute sécurité directement via l\'application avec notre système de paiement protégé.',
      color: '#b794f4'
    },
    {
      icon: <EnvironmentOutlined className="feature-icon" />,
      title: 'Géolocalisation',
      description: 'Découvrez les prestataires disponibles près de chez vous et suivez leur arrivée en temps réel.',
      color: '#4fd1c5'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Découvrez nos fonctionnalités</div>
          <Title level={2} className="section-title">
            Des outils puissants pour <span>simplifier votre quotidien</span>
          </Title>
          <Paragraph className="section-description">
            Découvrez comment ServiLink transforme la façon dont vous trouvez et réservez des services professionnels grâce à des fonctionnalités innovantes.
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
                    En savoir plus
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