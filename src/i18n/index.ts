import tr from './locales/tr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';

export type Locale = 'tr' | 'en' | 'ar';
export const locales: Locale[] = ['tr', 'en', 'ar'];
export const defaultLocale: Locale = 'tr';

const translations: Record<Locale, Record<string, any>> = { tr, en, ar };

interface LocaleConfig {
  lang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  label: string;
  shortLabel: string;
}

const localeConfig: Record<Locale, LocaleConfig> = {
  tr: { lang: 'tr', dir: 'ltr', ogLocale: 'tr_TR', label: 'Türkçe',   shortLabel: 'TR' },
  en: { lang: 'en', dir: 'ltr', ogLocale: 'en_US', label: 'English',  shortLabel: 'EN' },
  ar: { lang: 'ar', dir: 'rtl', ogLocale: 'ar_SA', label: 'العربية',  shortLabel: 'AR' },
};

/** Dot-notation lookup. Anahtarı bulamazsa key döner. */
export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: any = translations[locale];
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) {
      // Fallback to Turkish
      let fb: any = translations['tr'];
      for (const fk of keys) fb = fb?.[fk];
      return typeof fb === 'string' ? fb : key;
    }
  }
  return typeof result === 'string' ? result : key;
}

/** Array döndürür. */
export function tArray(locale: Locale, key: string): any[] {
  const keys = key.split('.');
  let result: any = translations[locale];
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) return [];
  }
  return Array.isArray(result) ? result : [];
}

/** Nesne döndürür. */
export function tObj(locale: Locale, key: string): any {
  const keys = key.split('.');
  let result: any = translations[locale];
  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) return undefined;
  }
  return result;
}

/** Locale prefix'li path üretir. TR (default) prefix almaz. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  const result = `/${locale}${clean === '/' ? '' : clean}`;
  return result || `/${locale}`;
}

/** URL'den locale çıkar. */
export function getLocaleFromURL(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if ((locales as string[]).includes(segment) && segment !== defaultLocale) {
    return segment as Locale;
  }
  return defaultLocale;
}

/** Locale konfigürasyonu döndür. */
export function getConfig(locale: Locale): LocaleConfig {
  return localeConfig[locale];
}

/** RTL mi? */
export function isRTL(locale: Locale): boolean {
  return localeConfig[locale].dir === 'rtl';
}

/** Tüm locale'ler için hreflang alternate URL'leri üretir. */
export function getAlternateURLs(basePath: string): { locale: Locale; href: string }[] {
  return locales.map((locale) => ({
    locale,
    href: `https://mto.siberkale.com${localePath(locale, basePath)}`,
  }));
}
