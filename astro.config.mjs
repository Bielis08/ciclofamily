// @ts-nocheck
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ciclofamily.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});