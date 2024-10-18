// @ts-check
import { defineConfig } from 'astro/config';
import typedCSSModulesPlugin from 'vite-plugin-typed-css-modules';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [typedCSSModulesPlugin()],
  },
});
