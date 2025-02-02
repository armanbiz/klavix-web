import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Ensure public directory is properly served
  publicDir: 'public',
  // Configure base URL if needed
  base: '/',
});