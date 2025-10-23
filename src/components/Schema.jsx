import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';


const Schema = () => {
  const { i18n } = useTranslation(['common']);
  const location = useLocation();
  const currentUrl = `https://servilink.netlify.app${location.pathname}`;
  const language = i18n.language;

  // Schema Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ServiLink",
    "url": "https://servilink.netlify.app",
    "logo": "https://servilink.netlify.app/images/logo.png",
    "description": "ServiLink - Connectez-vous aux meilleurs professionnels de services locaux",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TN",
      "addressLocality": "Sfax"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+216-24-372-697",
      "contactType": "Customer Service",
      "email": "servilink6@gmail.com",
      "availableLanguage": ["French", "English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/groups/8221537984615978",
      "https://www.instagram.com/servilink_2024",
      "https://www.linkedin.com/company/servilink"
    ],
    "founder": {
      "@type": "Person",
      "name": "Gamgam Amine"
    }
  };

  // Schema MobileApplication
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "ServiLink",
    "operatingSystem": ["ANDROID", "IOS"],
    "applicationCategory": "BusinessApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Trouvez et réservez des professionnels de services locaux en quelques clics",
    "screenshot": "https://servilink.netlify.app/images/SplashScreen.png"
  };

  // Schema WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ServiLink",
    "url": "https://servilink.netlify.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://servilink.netlify.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": [language]
  };

  // Schema WebPage pour chaque page
  const getPageSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": currentUrl,
      "inLanguage": language,
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://servilink.netlify.app"
      }
    };

    switch (location.pathname) {
      case '/':
        return {
          ...baseSchema,
          "name": "ServiLink - Plateforme de Services Locaux",
          "description": "Connectez-vous aux meilleurs professionnels de services locaux"
        };
      case '/features':
        return {
          ...baseSchema,
          "name": "Fonctionnalités - ServiLink",
          "description": "Découvrez toutes les fonctionnalités de ServiLink"
        };
      case '/how-it-works':
        return {
          ...baseSchema,
          "name": "Comment ça marche - ServiLink",
          "description": "Apprenez comment utiliser ServiLink en 4 étapes simples"
        };
      case '/testimonials':
        return {
          ...baseSchema,
          "name": "Témoignages - ServiLink",
          "description": "Découvrez ce que nos utilisateurs disent de ServiLink"
        };
      default:
        return baseSchema;
    }
  };

  // Schema BreadcrumbList
  const getBreadcrumbSchema = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://servilink.netlify.app"
        }
      ]
    };

    pathSegments.forEach((segment, index) => {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1),
        "item": `https://servilink.netlify.app/${pathSegments.slice(0, index + 1).join('/')}`
      });
    });

    return breadcrumbList;
  };

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Mobile Application Schema */}
      <script type="application/ld+json">
        {JSON.stringify(mobileAppSchema)}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(getPageSchema())}
      </script>

      {/* Breadcrumb Schema */}
      {location.pathname !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema())}
        </script>
      )}
    </Helmet>
  );
};

export default Schema;