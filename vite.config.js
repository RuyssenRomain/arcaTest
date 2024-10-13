import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './public',  // Répertoire racine du projet
  build: {
    manifest: true,  // Génère un fichier manifest.json
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/assets/js/main.js'),  // Point d'entrée du fichier main.js
      },
    },
    outDir: './public/dist',  // Répertoire de sortie après la compilation
    emptyOutDir: true,  // Vide le répertoire de sortie avant la compilation
  },
  server: {
    host: '0.0.0.0',  // Écoute sur toutes les interfaces réseau, nécessaire dans Docker
    port: 5173,  // Port pour Vite (interne)
    strictPort: true,  // Si le port est occupé, Vite échoue plutôt que d'utiliser un autre
    hmr: {
      host: 'localhost',  // Utilisation de 'localhost' pour le HMR
      port: 5173, 
    },
    // Pas de proxy nécessaire si vous n'avez pas d'API spécifique à proxy
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.js'),
  },
});
