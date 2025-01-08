import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationAr from './locales/ar/translation.json'
import translationEn from './locales/en/translation.json'

i18n
  .use(LanguageDetector) // Detects language from the browser or local storage
  .use(initReactI18next) // Initializes react-i18next
  .init({
    resources: {
      ar: {
        translation: translationAr,
      },
      en: {
        translation: translationEn,
      },
    },
    fallbackLng: 'en', // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;