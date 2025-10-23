import React from 'react';
import { Row, Col, Typography, Rate, Avatar } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Testimonials = ({ isDedicatedPage = false }) => {
  const { t } = useTranslation(['testimonials']);

  // Récupération des témoignages depuis la traduction
  const testimonials = t('testimonials', { returnObjects: true });
const sectionId = isDedicatedPage ? undefined : "how-it-works";
  return (
    <section className="testimonials" id={sectionId}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">{t('sectionTag')}</div>
          <Title level={2} className="section-title">
            {t('title')} <span>{t('titleHighlight')}</span> {t('titleEnd')}
          </Title>
          <Paragraph className="section-description">
            {t('description')}
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
                <div className="stat-number">{t('stats.satisfaction.value')}</div>
                <div className="stat-label">{t('stats.satisfaction.label')}</div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-box">
                <div className="stat-number">{t('stats.rating.value')}</div>
                <div className="stat-label">{t('stats.rating.label')}</div>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div className="stat-box">
                <div className="stat-number">{t('stats.reviews.value')}</div>
                <div className="stat-label">{t('stats.reviews.label')}</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;