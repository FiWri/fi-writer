/// <reference types="vitest" />
import * as path from 'path';


import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// By default, VitePWA will generate a service worker in dev mode using the `generateSW` strategy
// The generated worker will be generated in `{root}/dev-dist`
const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  includeAssets: ['icons/*.png', 'icons/*.ico', 'robots.txt'],

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
};

// In production, use `generateSW` to automatically generate a service worker in `dev-dist/`
if (process.env.SW_DEV === 'true') {
  pwaOptions.devOptions = {
    enabled: true,
    navigateFallback: 'index.html',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
  };
  pwaOptions.workbox = {
    // We need to include assets from the src folders to pre-cache them
    globPatterns: [
      '**/*.html',
      '../src/**/*.css',
      '../src/**/*.js',
      '../src/**/*.png',
      '../src/**/*.svg',
    ],
    maximumFileSizeToCacheInBytes: 3000000,
  };
}

// In production, use the custom service worker in `{root}/src/service-worker
if (process.env.SW === 'true') {
  pwaOptions.srcDir = 'src/service-worker';
  pwaOptions.filename = 'sw.ts';
  pwaOptions.strategies = 'injectManifest';
  pwaOptions.injectManifest = {
    globPatterns: ['**/*.css', '**/*.html', '**/*.js', '**/*.png', '**/*.svg'],
    maximumFileSizeToCacheInBytes: 3000000,
  };
}

const replaceOptions = {
  preventAssignment: true,
  __LAST_UPDATE__: new Date().toISOString(),
};

if (process.env.RELOAD_SW === 'true') {
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
    https: true,
    port: 3001,
  },
  plugins: [
    mkcert(),
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
