FROM mysql:5.7

# Copier le script d'initialisation
COPY ./docker/mysql/init.sql /docker-entrypoint-initdb.d/


# Exposer le port 3306
EXPOSE 3306
