# Déclarer l'argument pour la version de MongoDB
ARG MONGO_VERSION

# Utiliser l'argument pour choisir l'image MongoDB
FROM mongo:${MONGO_VERSION}

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers d'initialisation MongoDB
COPY ./docker/mongo/init.js /docker-entrypoint-initdb.d/

# Exposer le port MongoDB
EXPOSE ${MONGO_PORT}


#image travail déjà avec un utilisateur non-root.