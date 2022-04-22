import * as path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from 'theme-ui'`,
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
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
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
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
