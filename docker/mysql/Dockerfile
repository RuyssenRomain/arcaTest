# Déclarer l'argument pour la version de MySQL
ARG MYSQL_VERSION

# Utiliser l'argument pour choisir l'image MySQL
FROM mysql:${MYSQL_VERSION}

# Copier le script d'initialisation
COPY ./docker/mysql/init.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL
EXPOSE ${MYSQL_PORT}


# image travaille avec un utilisateur root nécessaire pour le dev mais pour la production il faudra changer les accès au privilèges pour respecter les POLP.
#code à tester pour la production ci dessous: 

###FROM mysql:5.7

###Créer un utilisateur non-root
# RUN useradd -u 1001 mysqluser

###Changer les permissions des répertoires nécessaires
# RUN chown -R mysqluser:mysqluser /var/lib/mysql /var/run/mysqld

###Copier le script d'initialisation
# COPY ./docker/mysql/init.sql /docker-entrypoint-initdb.d/

###Exposer le port 3306
# EXPOSE 3306

###Passer à l'utilisateur non-root
# USER mysqluser

# Démarrer MySQL (le point d'entrée par défaut devrait fonctionner)
