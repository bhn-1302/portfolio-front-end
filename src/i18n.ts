import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// importa os JSON direto
import translationPT from "./locales/pt/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt", // português como padrão
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: { translation: translationPT },
      en: { translation: translationEN },
    },
  });

export default i18n;

