FROM node:20-alpine3.19

# Déclarer l'argument pour la version de Node.js (déjà géré via build args)

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY ./package.json ./package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY ./public ./public
COPY ./src ./src

# Exposer le port Vite
EXPOSE 5173

# Commande par défaut
CMD ["npm", "run", "dev", "--", "--host"]
