// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
  });

export default i18n;
