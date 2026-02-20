import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Local resource imports
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import kkTranslation from './locales/kk/translation.json';

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  kk: { translation: kkTranslation }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ru', 'kk'],
  ns: ['translation'],
  defaultNS: 'translation',
  interpolation: { escapeValue: false },
  react: { useSuspense: true }
});

// Dev-only: allow showing translation keys instead of values when enabled.
// Enable by setting localStorage.setItem('i18n.showKeys','true') or adding ?showKeys=1 to the URL.
try {
  const originalT = (i18n as any).t.bind(i18n);

  const isDevMode = typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.MODE === 'development';

  function showKeysEnabled() {
    try {
      if (!isDevMode) return false;
      if (typeof window === 'undefined') return false;
      const url = new URL(window.location.href);
      const param = url.searchParams.get('showKeys');
      if (param === '1' || param === 'true') return true;
      return localStorage.getItem('i18n.showKeys') === 'true';
    } catch (e) {
      return false;
    }
  }

  (i18n as any).t = function (key: any, options?: any) {
    if (showKeysEnabled()) {
      if (typeof key === 'string') return key;
      if (Array.isArray(key)) return key.join(', ');
      // fallback to original behavior
    }
    return originalT(key, options);
  } as any;
} catch (e) {
  // ignore in production or if wrapping fails
}

export default i18n;
