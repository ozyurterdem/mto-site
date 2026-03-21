import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://mto.siberkale.com',
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [preact()],
});