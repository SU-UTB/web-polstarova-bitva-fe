import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://polstarovabitva.cz/',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
});
