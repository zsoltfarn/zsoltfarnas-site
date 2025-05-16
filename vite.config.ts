import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 This is required for subpath on Netlify
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

