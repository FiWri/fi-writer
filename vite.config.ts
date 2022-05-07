/// <reference types="vitest" />

import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
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
        // Use .babelrc files, necessary to use LinguiJS CLI
        babelrc: true,
        // Use babel.config.js files
        configFile: false,
      },
    }),
    // Declare icons for the PWA
    VitePWA({
      includeAssets: [
        '/icons/favicon.png',
        '/icons/favicon.ico',
        'robots.txt',
        '/icons/apple-touch-icon.png',
      ],
      manifest: {
        name: 'Fi-Writer',
        short_name: 'Fi-Writer, an open source interactive fiction writer',
        description:
          'Fi-Writer is an opensource writer for interactive fiction using Twin format',
        theme_color: '#fff2d6',
        icons: [
          {
            src: 'pwa-192x192.png',
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
    }),
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
