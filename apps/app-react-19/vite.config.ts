import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const casesPath = path.resolve(__dirname, '../../packages/cases/src');
const appPath = path.resolve(__dirname, './src');

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    react(),
    babel({
      exclude: /node_modules/,
      include: [/\.[tj]sx?$/],
      presets: [reactCompilerPreset()]
    })
  ],
  resolve: {
    alias: {
      '@': appPath,
      '@cases': casesPath,
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  server: {
    port: 3019
  }
});
