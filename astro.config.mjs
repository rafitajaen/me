// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://rafita.me',
  // base: '/me',
  integrations: 
  [
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(), //new Date('2025-10-30'),
    }), 
    icon()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});