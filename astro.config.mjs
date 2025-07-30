// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import icons from 'astro-icons';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), icons()],

  vite: {
    plugins: [tailwindcss()],
  },
});