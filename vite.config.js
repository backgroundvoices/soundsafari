import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// The app is served under /littlevoices/soundsafari, both on its own domain and
// proxied there from backgroundvoices.com. `base` prefixes the URLs the built
// index.html asks for, so the files have to be emitted under the same prefix —
// otherwise every asset request lands on the SPA fallback and comes back as
// HTML, and the module script is rejected for its MIME type.
export default defineConfig({
  plugins: [react()],
  base: '/littlevoices/soundsafari/',
  build: { outDir: 'dist/littlevoices/soundsafari', emptyOutDir: true },
});
