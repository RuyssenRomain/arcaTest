# Déclarer l'argument pour la version de PHP
ARG PHP_VERSION

# Utiliser l'argument pour choisir l'image PHP
FROM php:${PHP_VERSION}

# Afficher la version de Node.js utilisée lors du build (pour déboguer)
RUN echo "Building with PHP version: $PHP_VERSION"
# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo_mysql

# Installer Composer
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Changer les permissions du répertoire de travail
RUN chown -R www-data:www-data /var/www/html

# Copier les fichiers nécessaires avec les bonnes permissions
COPY --chown=www-data:www-data backend/composer.json backend/composer.lock ./

# Passer à l'utilisateur non-root
USER www-data

# Installer les dépendances PHP avec Composer
RUN composer install

# Copier le reste du code source / version avant le changement de privilèges.
# COPY backend/ /var/www/html

# Copier le reste du code source avec les bonnes permissions
COPY --chown=www-data:www-data backend/ /var/www/html

# Exposer le port PHP-FPM
EXPOSE ${PHP_PORT}

# Lancer PHP-FPM
CMD ["php-fpm"]
