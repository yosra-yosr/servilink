import React, { useState, useEffect } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
// Importez Link de react-scroll comme ScrollLink et Link/useLocation de react-router-dom
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const { t } = useTranslation(['header']);
  
  const location = useLocation(); // Hook pour obtenir la route actuelle
  const isHomePage = location.pathname === '/'; // Vrai si on est sur la page d'accueil

  // La logique de scroll ne s'applique que sur la page d'accueil
  useEffect(() => {
    // Les sections 'features', 'how-it-works', 'testimonials' n'existent plus sur la home,
    // donc nous ajustons la liste des sections pour le scroll.
    const scrollSections = ['hero', 'download'];
    
    // Si on est sur la page d'accueil ET qu'il y a des sections à scroller
    if (isHomePage) {
      const handleScroll = () => {
        if (window.scrollY > 60) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
        
        // Mise à jour du lien actif basé sur la position du scroll
        const scrollPosition = window.scrollY + 100;
        
        for (let i = scrollSections.length - 1; i >= 0; i--) {
          const section = document.getElementById(scrollSections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveLink(scrollSections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Sur les pages dédiées, le header est toujours "scrolled" et le lien actif est basé sur la route
      setScrolled(true); 
      // Récupère la partie de la route (ex: 'features' pour '/features')
      setActiveLink(location.pathname.substring(1)); 
    }
  }, [isHomePage, location.pathname]);

  const onClose = () => setVisible(false);
  const showDrawer = () => setVisible(true);

  const menuItems = [
    { key: 'features', label: t('features'), path: '/features' },
    { key: 'how-it-works', label: t('howItWorks'), path: '/how-it-works' },
    { key: 'testimonials', label: t('testimonials'), path: '/testimonials' },
  ];

  // Composant de lien conditionnel pour gérer le scroll ou le routage
  const NavLink = ({ item, children, className, activeClass, onClickHandler }) => {
    
    // Vérifie si l'élément a un chemin défini (c'est le cas pour toutes les pages dédiées)
    // OU si nous ne sommes pas sur la page d'accueil (tous les liens doivent alors router)
    const shouldRoute = item.path || !isHomePage; 
    
    // Si nous devons router OU si nous sommes sur une page dédiée
    if (shouldRoute) {
      const targetPath = item.path || (item.key === 'hero' ? '/' : `/${item.key}`);
      
      return (
        <RouterLink 
          to={targetPath} 
          className={className} 
          onClick={onClickHandler}
        >
          {children}
        </RouterLink>
      );
    } 
    
    // Si nous sommes sur la Home Page ET que le lien n'a PAS de path (ex: 'download' ou 'hero')
    // alors on utilise le ScrollLink.
    return (
      <ScrollLink
        to={item.key} // Utilise l'ID de la section cible
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className={className}
        activeClass={activeClass}
        onClick={onClickHandler}
      >
        {children}
      </ScrollLink>
    );
  };
  
  const ctaLinkKey = 'download';
  
  // Fonction pour déterminer si un lien est actif
  const isLinkActive = (itemKey, itemPath) => {
    if (isHomePage) {
      // Active link pour le scroll (hero, download)
      return activeLink === itemKey; 
    }
    // Pour les pages dédiées, compare le chemin actuel avec le chemin cible
    return location.pathname === itemPath;
  };

  return (
    <Layout.Header className={`header ${scrolled || !isHomePage ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          {/* Le logo navigue toujours vers la page d'accueil */}
          <RouterLink to="/"> 
            <img src="/images/logo.png" alt="ServiLink Logo" />
          </RouterLink>
        </div>
        
        <div className="desktop-menu">
          <nav className="main-nav">
            <ul className="nav-list">
              {/* Lien Home (Hero) */}
              <li key="hero" className={`nav-item ${isLinkActive('hero', '/') ? 'active' : ''}`}>
                <NavLink 
                    // Pour le lien Home, on utilise { key: 'hero' } pour le scroll 
                    // et on lui donne un path: '/' pour qu'il soit détecté comme RouterLink s'il n'y a pas de scroll
                    item={{ key: 'hero', path: '/' }} 
                    className="nav-link"
                    activeClass="active"
                >
                    {t('home')} 
                </NavLink>
              </li>

              {menuItems.map(item => {
                // Définir la classe 'active' basée sur le routage ou le scroll
                const isActive = isHomePage 
                  ? activeLink === item.key // Active seulement 'hero' ou 'download' si sur home
                  : location.pathname === item.path;
                
                return (
                  <li key={item.key} className={`nav-item ${isActive ? 'active' : ''}`}>
                    <NavLink 
                      item={item} // Ces items ont un path, ils vont router
                      className="nav-link" 
                      activeClass="active"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            
            {/* Le bouton Télécharger agit comme un NavLink conditionnel qui scrolle sur la page Home */}
            <NavLink 
              item={{ key: ctaLinkKey }} 
              className="nav-link-cta"
            >
              <Button type="primary" className="cta-button">
                {t('downloadApp')}
              </Button>
            </NavLink>
          </div>
        </div>

        {/* ... (Menu mobile - Drawer) ... */}
        <div className="mobile-menu-toggle">
          <div className="header-actions-mobile-pre">
            <LanguageSwitcher />
          </div>
          <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className="menu-toggle-btn" />
        </div>
      </div>
      
      <Drawer
        // Utiliser RouterLink pour le logo dans le Drawer
        title={<RouterLink to="/" onClick={onClose}><img src="/images/logo.png" alt="ServiLink Logo" style={{ height: '50px' }} /></RouterLink>}
        placement="right"
        onClose={onClose}
        open={visible}
        className="mobile-drawer"
        width={280}
      >
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
             <li key="hero" className="mobile-nav-item">
                <NavLink 
                  item={{ key: 'hero', path: '/' }}
                  onClickHandler={onClose}
                  className="mobile-nav-link"
                >
                    {t('home')}
                </NavLink>
              </li>
            {menuItems.map(item => (
              <li key={item.key} className="mobile-nav-item">
                <NavLink
                  item={item}
                  onClickHandler={onClose}
                  className="mobile-nav-link"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="mobile-actions">
            <LanguageSwitcher />
            
            <NavLink
              item={{ key: ctaLinkKey }}
              onClickHandler={onClose}
            >
              <Button block className="mobile-cta-button">
                {t('downloadApp')}
              </Button>
            </NavLink>
          </div>
        </nav>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;