# Utilise une image alpine de MongoDB
FROM mongo:7.0

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copie les fichiers d'initialisation MongoDB
COPY  ./docker/mongo/init.js /docker-entrypoint-initdb.d/

# Exposer le port par défaut de MongoDB
EXPOSE 27017
