// Mobiconnect — astro.config.mjs
// Static output, cero client JS por defecto, HTML comprimido, sitemap en /sitemap-index.xml
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mobiconnect.app',
  compressHTML: true,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date('2026-10-01'),
    }),
  ],
});
