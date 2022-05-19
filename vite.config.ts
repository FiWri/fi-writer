/// <reference types="vitest" />
import * as path from 'path';

import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: [
    'icons/favicon.png',
    'icons/favicon.ico',
    'robots.txt',
    'icons/apple-touch-icon.png',
  ],
  manifest: {
    name: 'Fi-Writer',
    short_name: 'Fi-Writer',
    description:
      'Fi-Writer is an opensource writer for interactive fiction using Twine format',
    theme_color: '#fff2d6',
    icons: [
      {
        src: 'icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
};

if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src/service-workers';
  pwaOptions.filename = 'service-worker.ts';
  pwaOptions.strategies = 'injectManifest';
  (pwaOptions.manifest as Partial<ManifestOptions>).name =
    'Fi-Writer Injected Manifest';
}

const replaceOptions = {
  preventAssignment: true,
  __LAST_UPDATE__: new Date().toISOString(),
};

const reload = process.env.RELOAD_SW === 'true';
if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = 'true';
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [analyze({ summaryOnly: true })],
    },
    sourcemap: process.env.SOURCE_MAP === 'true',
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from '@theme-ui/core'`,
  },
  server: {
    port: 3001,
  },
  plugins: [
    react({
      babel: {
        // Use .babelrc config file
        babelrc: false,
        // Use babel.config.js config files, necessary to use LinguiJS CLI
        configFile: true,
      },
    }),
    replace(replaceOptions),
    VitePWA(pwaOptions),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/utils/test-setup.ts',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
