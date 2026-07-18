// @ts-nocheck
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

function loadEnvFile() {
  try {
    const envPath = resolve(process.cwd(), '.env');
    const content = readFileSync(envPath, 'utf-8');
    const env = {};
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      env[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
    }
    return env;
  } catch {
    return {};
  }
}

const env = loadEnvFile();

async function getDynamicRoutes() {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const url = env.PUBLIC_SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
    const key = env.PUBLIC_SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;
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
