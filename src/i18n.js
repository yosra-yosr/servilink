import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translations using http (default public/locales)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'ar'],
    
    // language to use if translations in user language are not available
    debug: process.env.NODE_ENV !== 'production',
    
    // namespaces
    ns: ['common', 'header', 'hero', 'features', 'howItWorks', 'testimonials', 'download', 'footer'],
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    // detect RTL languages
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: true,
    },
  });

export default i18n;