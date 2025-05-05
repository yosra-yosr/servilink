import React from 'react';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(['common']);
  
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    // Handle RTL for Arabic
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
  };

  return (
    <div className="language-switcher">
      <Select
        defaultValue={i18n.language}
        onChange={changeLanguage}
        dropdownMatchSelectWidth={false}
        bordered={false}
        suffixIcon={<GlobalOutlined />}
        optionLabelProp="label"
      >
        <Select.Option value="fr" label="FR">
          <div className="language-option">
            <span className="flag-icon">🇫🇷</span>
            <span>Français</span>
          </div>
        </Select.Option>
        <Select.Option value="en" label="EN">
          <div className="language-option">
            <span className="flag-icon">🇬🇧</span>
            <span>English</span>
          </div>
        </Select.Option>
        <Select.Option value="ar" label="AR">
          <div className="language-option">
            <span className="flag-icon">🇹🇳</span>
            <span>العربية</span>
          </div>
        </Select.Option>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;