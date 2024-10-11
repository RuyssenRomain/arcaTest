# Déclarer l'argument pour la version de MySQL
ARG MYSQL_VERSION

# Utiliser l'argument pour choisir l'image MySQL
FROM mysql:${MYSQL_VERSION}

# Copier le script d'initialisation
COPY ./docker/mysql/init.sql /docker-entrypoint-initdb.d/init.sql

# Exposer le port MySQL
EXPOSE 3306

# Utiliser l'utilisateur root pour le développement
# En production, il est recommandé de créer un utilisateur non-root => accés au moindre privilèges = respect des regles PLOP

###FROM mysql:5.7

# Créer un utilisateur non-root
# RUN useradd -u 1001 mysqluser

# Changer les permissions des répertoires nécessaires
# RUN chown -R mysqluser:mysqluser /var/lib/mysql /var/run/mysqld

# Copier le script d'initialisation
# COPY ./docker/mysql/init.sql /docker-entrypoint-initdb.d/init.sql

# Exposer le port MySQL
# EXPOSE 3306

# Passer à l'utilisateur non-root
# USER mysqluser

# Démarrer MySQL (le point d'entrée par défaut devrait fonctionner)
