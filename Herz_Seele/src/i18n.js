import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import fi from "./locales/fi/translation.json";

import tr from "./locales/tr/translation.json";
import ar from "./locales/ar/translation.json";
import ru from "./locales/ru/translation.json";
import ukr from "./locales/ukr/translation.json";
import pl from "./locales/pl/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    fi: { translation: fi },
    tr: { translation: tr },
    ar: { translation: ar },
    ru: { translation: ru },
    ukr: { translation: ukr },
    pl: { translation: pl }
    
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: { escapeValue: false }
});

export default i18n;
