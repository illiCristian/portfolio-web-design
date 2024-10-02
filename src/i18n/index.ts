import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
  en: english,
  es: spanish,
};

export const getI18n = ({ currentLocale }: { currentLocale: string}) => {
  switch (currentLocale) {
    case "en":
      return LANGUAGES.en;
    case "es":
      return LANGUAGES.es;
    default:
      return LANGUAGES.en;
  }
};
