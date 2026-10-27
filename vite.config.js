import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps asset URLs valid under a GitHub Pages repository path
// (https://<user>.github.io/portfolio/) and on a local preview. Routing uses
// HashRouter, so no server-side rewrites are needed.
export default defineConfig({
  base: './',
  plugins: [react()],
});
