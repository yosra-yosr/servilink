import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, keywords, image }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentUrl = `https://servilink.netlify.app${location.pathname}`;
  const defaultImage = 'https://servilink.netlify.app/images/logo.png';

  const siteTitle = 'ServiLink';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || 'Connectez-vous aux meilleurs professionnels de services locaux';
  const metaKeywords = keywords || 'services locaux, professionnels, réservation, ServiLink';
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Gamgam Amine" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="ServiLink" />
      <meta property="og:locale" content={i18n.language === 'fr' ? 'fr_FR' : i18n.language === 'ar' ? 'ar_AR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Alternate Language Links */}
      <link rel="alternate" hreflang="fr" href={`https://servilink.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="en" href={`https://servilink.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="ar" href={`https://servilink.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="x-default" href={`https://servilink.netlify.app${location.pathname}`} />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ServiLink" />

      {/* Theme Color */}
      <meta name="theme-color" content="#4299e1" />
    </Helmet>
  );
};

export default SEOHead;