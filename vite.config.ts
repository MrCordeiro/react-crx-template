import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { crx } from '@crxjs/vite-plugin';
import zipPack from 'vite-plugin-zip-pack';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), crx({ manifest }), zipPack()],
    server: {
      port: 3000,
    },
  };
});
