// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],

  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});