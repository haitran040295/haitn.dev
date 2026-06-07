// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ SET YOUR DOMAIN HERE — this single value drives canonical links, the
// Open Graph/Twitter image URLs, JSON-LD, robots.txt, and the sitemap.
// Replace it with your real production URL (no trailing slash), then redeploy.
const SITE = 'https://haitn.dev';

export default defineConfig({
  site: SITE,
  integrations: [sitemap({ filter: (page) => !page.includes('/tokens') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
