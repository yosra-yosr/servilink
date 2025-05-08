import React from 'react';
import { Select } from 'antd';
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
        optionLabelProp="label"
        popupClassName="language-dropdown"
      >
        <Select.Option value="fr" label={<span className="selected-language"><span className="flag-circle flag-circle-fr"></span>FR</span>}>
          <div className="language-option">
            <span className="flag-circle flag-circle-fr"></span>
            <span className="language-name">Français</span>
          </div>
        </Select.Option>
        <Select.Option value="en" label={<span className="selected-language"><span className="flag-circle flag-circle-us"></span>EN</span>}>
          <div className="language-option">
            <span className="flag-circle flag-circle-us"></span>
            <span className="language-name">English</span>
          </div>
        </Select.Option>
        <Select.Option value="ar" label={<span className="selected-language"><span className="flag-circle flag-circle-tn"></span>AR</span>}>
          <div className="language-option">
            <span className="flag-circle flag-circle-tn"></span>
            <span className="language-name">العربية</span>
          </div>
        </Select.Option>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;