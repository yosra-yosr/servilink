import React from 'react';
import { Row, Col, Typography, Rate, Avatar } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Grâce à ServiLink, j'ai trouvé un plombier disponible en urgence un dimanche soir. L'application est intuitive et le service était parfait. Le prestataire est arrivé en 30 minutes et a résolu mon problème rapidement. Je recommande vivement!",
      name: "Sophie M.",
      title: "Cliente depuis 6 mois",
      image: "/api/placeholder/100/100",
      color: "#4299e1"
    },
    {
      rating: 4.5,
      text: "En tant qu'électricien indépendant, ServiLink m'a permis de développer ma clientèle et de remplir mon agenda. Le système de mise en relation est vraiment efficace et l'interface de gestion des rendez-vous est un vrai plus pour mon organisation quotidienne.",
      name: "Thomas L.",
      title: "Prestataire depuis 1 an",
      image: "/api/placeholder/100/100",
      color: "#f6ad55"
    },
    {
      rating: 5,
      text: "J'ai pu trouver un professeur de piano pour ma fille en quelques minutes. Le système de filtrage par compétences et par proximité est vraiment pratique. Les profils détaillés et les vidéos de présentation m'ont aidée à faire le bon choix.",
      name: "Marc D.",
      title: "Client depuis 3 mois",
      image: "/api/placeholder/100/100",
      color: "#68d391"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Témoignages clients</div>
          <Title level={2} className="section-title">
            Ce que <span>nos utilisateurs</span> en disent
          </Title>
          <Paragraph className="section-description">
            Découvrez les expériences de nos clients et prestataires qui utilisent ServiLink au quotidien.
          </Paragraph>
        </div>
        
        <div className="testimonials-wrapper">
          <Row gutter={[32, 32]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index}>
                <div className="testimonial-card" style={{ borderTop: `4px solid ${testimonial.color}` }}>
                  <div className="quote-icon" style={{ color: testimonial.color }}>
                    <FacebookOutlined />
                  </div>
                  <div className="testimonial-content">
                    <Rate disabled defaultValue={testimonial.rating} className="testimonial-rating" />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <Avatar 
                      size={64} 
                      src={testimonial.image} 
                      className="author-avatar"
                      style={{ border: `2px solid ${testimonial.color}` }}
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-title">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="testimonials-stats">
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={8}>
              <div className="stat-box">
                <div className="stat-number">98%</div>
                <div className="stat-label">Taux de satisfaction</div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-box">
                <div className="stat-number">4.8/5</div>
                <div className="stat-label">Note moyenne</div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-box">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Avis vérifiés</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;