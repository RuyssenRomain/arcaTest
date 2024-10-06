# Déclarer l'argument pour la version de Node.js
ARG NODE_VERSION

# Utiliser l'argument pour choisir l'image Node.js
FROM node:${NODE_VERSION}


# Afficher la version de Node.js utilisée lors du build (pour déboguer)
RUN echo "Building with Node.js version: $NODE_VERSION"
# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Exposer le port Node.js
EXPOSE ${NODE_PORT}

# Démarrer l'application
CMD ["npm", "run", "dev"]

