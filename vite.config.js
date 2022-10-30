/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'sirena.svg'],
    manifest: {
      name: 'Платформа Winline и RPL',
      short_name: 'Winline Платформа',
      description: 'Играйте, побеждайте и получайте бонусы от Winline!',
      theme_color: '#02035d',
      background_color: '#02035d',
      icons: [
        {
          src: 'icons/icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
          purpose: 'maskable any',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable any',
        },
      ],
    },
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/scss/main.scss";',
      },
    },
  },
  server: {
    port: 8080,
    host: true,
    fs: {
      allow: ['../'],
    },
  },
});
