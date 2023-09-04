import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: 'seedbkkchurch.github.io',
=======
  site: 'https://seedbkkchurch.github.io/seedbkk-landing-astro',
>>>>>>> 1a35a8d9dddd8b43264a0c877e6bfd8698c3575d
  base: '/seedbkk-landing-astro',
  integrations: [mdx(), sitemap(), image()]
});