import { resolve } from 'path';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
