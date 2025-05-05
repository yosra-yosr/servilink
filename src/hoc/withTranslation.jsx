import React from 'react';
import { useTranslation } from 'react-i18next';

// Higher Order Component to simplify component translation
const withTranslation = (namespace) => (Component) => {
  return function WrappedComponent(props) {
    const { t } = useTranslation(namespace);
    
    // Pass the translation function and any other props to the wrapped component
    return <Component {...props} t={t} />;
  };
};

export default withTranslation;