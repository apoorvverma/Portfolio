/**
 * Vite Configuration
 *
 * Modern build tool configuration for the portfolio.
 * Replaces Create React App with faster HMR and optimized builds.
 *
 * @see https://vitejs.dev/config/
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // React plugin for JSX transformation (classic runtime for React 16)
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],

  // Base path for GitHub Pages deployment
  base: './',

  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-typist'],
  },

  // Handle CommonJS modules
  build: {
    outDir: 'build',
    sourcemap: true,
    minify: false,
    target: 'es2015',
    commonjsOptions: {
      include: [/react-typist/, /node_modules/],
    },
  },
});
