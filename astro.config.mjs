import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mto2.siberkale.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
