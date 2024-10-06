import SpainFlag from "../components/flags/Spain.astro";
import UnitedStatesFlag from "../components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "En",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Es",
    flag: SpainFlag,
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "/",
    "nav.trabajos": "trabajos",
    "nav.sobremi": "sobremi",
  },
  en: {
    "nav.home": "/",
    "nav.work": "work",
    "nav.about": "about",
  },
} as const;

export const routes = {
  es: {
    home: "/",
    trabajos: "trabajos",
    sobremi: "sobremi",
  },
  en: {
    home: "/",
    work: "work",
    about: "about",
  },
};
