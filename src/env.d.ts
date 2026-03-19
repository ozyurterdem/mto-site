/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly PANEL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
