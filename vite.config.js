import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './public',  // Définit le répertoire racine du projet
  build: {
    manifest: true,  // Génère un fichier manifest.json
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/main.js'),  // Point d'entrée du fichier main.js
      },
    },
    outDir: './public/dist',  // Répertoire de sortie après la compilation
  },
  server: {
    host: '0.0.0.0',  // Écoute sur toutes les interfaces réseau, nécessaire dans Docker
    port: 5173,  // Définit le port pour Vite
    strictPort: true,  // Si le port est occupé, Vite échoue plutôt que d'utiliser un autre
    proxy: {
      // Proxy les requêtes vers ton serveur PHP (sur le port 8080)
      '/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      host: '0.0.0.0',  // Utilisation de localhost pour le Hot Module Replacement (HMR)
      port: 5173, 
    }
  }
});
