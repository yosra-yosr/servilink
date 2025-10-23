import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, keywords, image }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentUrl = `https://servi-link.netlify.app${location.pathname}`;
  const defaultImage = 'https://servi-link.netlify.app/images/logo.png';

  const siteTitle = 'ServiLink';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  // Description enrichie avec mots-clés naturels
  const metaDescription = description || 'Trouvez et réservez les meilleurs professionnels de services locaux : plombiers, électriciens, chauffagistes, artisans qualifiés. Service rapide, devis gratuit, intervention d\'urgence disponible.';
  
  // Mots-clés enrichis basés sur les services principaux
  const defaultKeywords = [
    // Services principaux
    'plombier pas cher',
    'chauffagiste autour de moi',
    'plomberie rive sud',
    'sos plomberie',
    'plombier d\'urgence',
    'plombier autour de moi',
    'électricien',
    'electrician',
    'residential electrician',
    'electricians',
    'journeyman electrician',
    'licensed electrician',
    
    // Services généraux
    'services locaux',
    'professionnels qualifiés',
    'artisans certifiés',
    'réservation en ligne',
    'devis gratuit',
    'intervention rapide',
    'service à domicile',
    'dépannage urgent',
    'réparation',
    'installation',
    'maintenance',
    
    // Localisation
    'services près de moi',
    'professionnels à proximité',
    'artisans locaux',
    
    // Marque
    'ServiLink',
    'plateforme de services',
    'mise en relation professionnels'
  ];
  
  const metaKeywords = keywords || defaultKeywords.join(', ');
  const metaImage = image || defaultImage;

  // Schema.org structured data pour améliorer le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ServiLink",
    "url": currentUrl,
    "description": metaDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://servi-link.netlify.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ServiLink",
    "url": "https://servi-link.netlify.app",
    "logo": defaultImage,
    "description": metaDescription,
    "sameAs": []
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Gamgam Amine" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="TN" />
      <meta name="geo.placename" content="Tunisia" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ServiLink" />
      <meta property="og:locale" content={i18n.language === 'fr' ? 'fr_FR' : i18n.language === 'ar' ? 'ar_AR' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Alternate Language Links */}
      <link rel="alternate" hreflang="fr" href={`https://servi-link.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="en" href={`https://servi-link.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="ar" href={`https://servi-link.netlify.app${location.pathname}`} />
      <link rel="alternate" hreflang="x-default" href={`https://servi-link.netlify.app${location.pathname}`} />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ServiLink" />

      {/* Theme Color */}
      <meta name="theme-color" content="#4299e1" />

      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="language" content={i18n.language} />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;