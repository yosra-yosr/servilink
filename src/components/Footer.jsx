import React from 'react';
import { Layout, Row, Col, Typography, Divider, List, Button, Input, Space } from 'antd';
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  RightOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Footer: AntFooter } = Layout;

const Footer = () => {
  const aboutLinks = [
    { title: 'Notre histoire', href: '#' },
    { title: 'Notre équipe', href: '#' },
    { title: 'Carrières', href: '#' },
    { title: 'Actualités', href: '#' },
  ];

  const resourceLinks = [
    { title: 'Centre d\'aide', href: '#' },
    { title: 'Tutoriels', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'FAQ', href: '#' },
  ];

  const legalLinks = [
    { title: 'Conditions d\'utilisation', href: '#' },
    { title: 'Politique de confidentialité', href: '#' },
    { title: 'Mentions légales', href: '#' },
    { title: 'Cookies', href: '#' },
  ];

  const contactInfo = [
    { icon: <MailOutlined />, text: 'servilink6@gmail.com', href: 'mailto:servilink6@gmail.com' },
    { icon: <PhoneOutlined />, text: '+216 24 372 697', href: 'tel:+21624372697' },
    { icon: <EnvironmentOutlined />, text: 'Pépinière des entreprises, Rue de jérusalem Radès', href: 'https://maps.google.com' },
  ];

  return (
    <AntFooter className="modern-footer">
      <div className="footer-top">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="ServiLink Logo" />
                </div>
                <Paragraph className="footer-description">
                  Connectez-vous aux meilleurs prestataires de services pour tous vos besoins quotidiens. Notre plateforme innovante révolutionne la façon de trouver des professionnels qualifiés.
                </Paragraph>
                
              </div>
            </Col>
            
            <Col xs={24} sm={24} md={16} lg={16}>
              <Row gutter={[24, 32]}>
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">À propos</Title>
                  <List
                    dataSource={aboutLinks}
                    renderItem={item => (
                      <List.Item className="footer-list-item">
                        <RightOutlined className="footer-link-icon" />
                        <a href={item.href}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">Ressources</Title>
                  <List
                    dataSource={resourceLinks}
                    renderItem={item => (
                      <List.Item className="footer-list-item">
                        <RightOutlined className="footer-link-icon" />
                        <a href={item.href}>{item.title}</a>
                      </List.Item>
                    )}
                  />
                </Col>
                
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">Contact</Title>
                  <List
                    dataSource={contactInfo}
                    renderItem={item => (
                      <List.Item className="footer-contact-item">
                        <span className="contact-icon">{item.icon}</span>
                        <a href={item.href}>{item.text}</a>
                      </List.Item>
                    )}
                  />
                  <div className="social-links">
                    <a href="https://www.facebook.com/groups/8221537984615978" target="_blank" rel="noopener noreferrer" className="social-link">
                      <FacebookOutlined />
                    </a>
                    <a href="https://www.instagram.com/servilink_2024?igsh=MWM0MHU0cWlkaHg4eA==" target="_blank" rel="noopener noreferrer" className="social-link">
                      <InstagramOutlined />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                      <LinkedinOutlined />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="container">
          <Row justify="space-between" align="middle">
            <Col xs={24} sm={12}>
              <Title level={4} className="legal-title">Légal</Title>
              <div className="legal-links">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a href={link.href}>{link.title}</a>
                    {index < legalLinks.length - 1 && <span className="legal-separator">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </Col>
            <Col xs={24} sm={12} className="download-btns">
              <Button className="app-store-btn">
                App Store
              </Button>
              <Button className="play-store-btn">
                Google Play
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <Paragraph className="copyright">
            &copy; 2025 ServiLink. Développé avec <HeartOutlined /> par Zoug Yosra. Tous droits réservés.
          </Paragraph>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;