import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './public',
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/main.js'),  // Utilise main.js comme point d'entrée
      },
    },
    outDir: '../dist',  // Le répertoire de sortie pour les fichiers buildés
  },
  server: {
    port: 5173,
    proxy: {
      // Proxy les requêtes vers ton serveur PHP (port 8080)
      '/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
