import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: React plugin for JSX and fast HMR
export default defineConfig({
  plugins: [react()],
});
