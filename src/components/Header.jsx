import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Mise à jour du lien actif basé sur la position du scroll
      const sections = ['hero', 'features', 'how-it-works', 'testimonials', 'download'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { key: 'features', label: 'Fonctionnalités' },
    { key: 'how-it-works', label: 'Comment ça marche' },
    { key: 'testimonials', label: 'Témoignages' },
    { key: 'download', label: 'Télécharger' }
  ];

  return (
    <Layout.Header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="ServiLink Logo" />
        </div>
        
        <div className="desktop-menu">
          <nav className="main-nav">
            <ul className="nav-list">
              {menuItems.map(item => (
                <li key={item.key} className={`nav-item ${activeLink === item.key ? 'active' : ''}`}>
                  <Link 
                    to={item.key} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                    className="nav-link"
                    activeClass="active"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header-actions">
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <Button type="primary" className="cta-button">
                Télécharger l'app
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mobile-menu-toggle">
          <Button type="text" onClick={showDrawer} icon={<MenuOutlined />} className="menu-toggle-btn" />
        </div>
      </div>
      
      <Drawer
        title={<img src="/images/logo.png" alt="ServiLink Logo" style={{ height: '50px' }} />}
        placement="right"
        onClose={onClose}
        open={visible}
        className="mobile-drawer"
        width={280}
      >
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {menuItems.map(item => (
              <li key={item.key} className="mobile-nav-item">
                <Link
                  to={item.key}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={onClose}
                  className="mobile-nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mobile-actions">
            <Link
              to="download"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={onClose}
            >
              <Button type="primary" block className="mobile-cta-button">
                Télécharger l'app
              </Button>
            </Link>
          </div>
        </nav>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;