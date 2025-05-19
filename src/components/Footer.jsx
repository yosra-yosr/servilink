import React from 'react';
import { Layout, Row, Col, Typography, List, Button } from 'antd';
import { 
  FacebookOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  RightOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;
const { Footer: AntFooter } = Layout;

const Footer = () => {
  const { t, i18n } = useTranslation(['footer']);
  const isRTL = i18n.language === 'ar';

  const aboutLinks = [
    { title: t('aboutLinks.ourStory'), href: '#' },
    { title: t('aboutLinks.ourTeam'), href: '#' },
    { title: t('aboutLinks.careers'), href: '#' },
    { title: t('aboutLinks.news'), href: '#' },
  ];

  const resourceLinks = [
    { title: t('resourceLinks.helpCenter'), href: '#' },
    { title: t('resourceLinks.tutorials'), href: '#' },
    { title: t('resourceLinks.blog'), href: '#' },
    { title: t('resourceLinks.faq'), href: '#' },
  ];

  const legalLinks = [
    { title: t('legalLinks.termsOfUse'), href: '#' },
    { title: t('legalLinks.privacyPolicy'), href: '#' },
    { title: t('legalLinks.legalNotice'), href: '#' },
    { title: t('legalLinks.cookies'), href: '#' },
  ];

  const contactInfo = [
    { icon: <MailOutlined />, text: 'servilink6@gmail.com', href: 'mailto:servilink6@gmail.com' },
    { icon: <PhoneOutlined />, text: '+216 24 372 697', href: 'tel:+21624372697', forceDirection: true },
    { icon: <EnvironmentOutlined />, text: t('contactInfo.address'), href: 'https://maps.google.com' },
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
                  {t('description')}
                </Paragraph>
                <div className="social-links">
                  <a href="https://www.facebook.com/groups/8221537984615978" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FacebookOutlined />
                  </a>
                  <a href="https://www.instagram.com/servilink_2024?igsh=MWM0MHU0cWlkaHg4eA==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <InstagramOutlined />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <LinkedinOutlined />
                  </a>
                </div>
              </div>
            </Col>
            
            <Col xs={24} sm={24} md={16} lg={16}>
              <Row gutter={[24, 32]}>
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">{t('about')}</Title>
                  <List
                    dataSource={aboutLinks}
                    renderItem={item => (
                      <List.Item className="footer-list-item">
                        {!isRTL && <RightOutlined className="footer-link-icon" />}
                        <a href={item.href}>{item.title}</a>
                        {isRTL && <RightOutlined className="footer-link-icon-rtl" />}
                      </List.Item>
                    )}
                  />
                </Col>
                
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">{t('resources')}</Title>
                  <List
                    dataSource={resourceLinks}
                    renderItem={item => (
                      <List.Item className="footer-list-item">
                        {!isRTL && <RightOutlined className="footer-link-icon" />}
                        <a href={item.href}>{item.title}</a>
                        {isRTL && <RightOutlined className="footer-link-icon-rtl" />}
                      </List.Item>
                    )}
                  />
                </Col>
                
                <Col xs={24} sm={8}>
                  <Title level={4} className="footer-title">{t('contact')}</Title>
                  <List
                    dataSource={contactInfo}
                    renderItem={item => (
                      <List.Item className="footer-contact-item">
                        <span className="contact-icon">{item.icon}</span>
                        {item.forceDirection ? (
                          <a href={item.href} dir="ltr" className="phone-number">{item.text}</a>
                        ) : (
                          <a href={item.href}>{item.text}</a>
                        )}
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      
      <div className="footer-middle">
        <div className="container">
          <Row justify="space-between" align="middle" gutter={[0, 24]}>
            <Col xs={24} sm={12} md={12}>
              <Title level={4} className="legal-title">{t('legal')}</Title>
              <div className="legal-links">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a href={link.href}>{link.title}</a>
                    {index < legalLinks.length - 1 && <span className="legal-separator">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} className="download-btns">
              <a href="https://www.figma.com/proto/O0lbzwDv6XSC0AGCTdcgv8/ServiLink?node-id=297-4370&t=meUHn0JZPiXhhDYV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=297%3A4370" target="_blank" rel="noopener noreferrer">
                <Button className="app-store-btn">
                  {t('appStore')}
                </Button>
              </a>
              <a href="https://www.figma.com/proto/O0lbzwDv6XSC0AGCTdcgv8/ServiLink?node-id=297-4370&t=meUHn0JZPiXhhDYV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=297%3A4370" target="_blank" rel="noopener noreferrer">
                <Button className="play-store-btn">
                  {t('googlePlay')}
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <Paragraph className="copyright">
            &copy; 2025 ServiLink. {t('developedWith')} <HeartOutlined className="heart-icon" /> {t('by')} Zoug Yosra. {t('allRightsReserved')}.
          </Paragraph>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;