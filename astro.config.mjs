// @ts-nocheck
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const env = loadEnv('production', process.cwd(), '');

async function getDynamicRoutes() {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const url = env.PUBLIC_SUPABASE_URL;
    const key = env.PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return [];
    const supabase = createClient(url, key);
    const { data } = await supabase.from('rutas').select('id');
    return (data ?? []).map(r => `https://ciclofamily.vercel.app/rutas/${r.id}`);
  } catch {
    return [];
  }
}

const dynamicRoutes = await getDynamicRoutes();

// https://astro.build/config
export default defineConfig({
  site: 'https://ciclofamily.vercel.app',
  output: 'server',
  adapter: vercel({
    maxDuration: 30,
    memory: 512,
  }),
  integrations: [sitemap({
    customPages: dynamicRoutes,
  })],

  vite: {
    plugins: [tailwindcss()],
  },
});
