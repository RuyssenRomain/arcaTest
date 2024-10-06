# Déclarer l'argument pour la version de PHP avec une valeur par défaut
ARG PHP_VERSION=8.0-fpm-alpine

# Utiliser l'argument pour choisir l'image PHP
FROM php:${PHP_VERSION}

# Afficher la version de PHP utilisée lors du build (pour déboguer)
RUN echo "Building with PHP version: ${PHP_VERSION}"

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Installer Composer depuis l'image composer:2.1
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Changer les permissions du répertoire de travail pour www-data
RUN chown -R www-data:www-data /var/www/html

# Copier les fichiers composer avec les bonnes permissions
COPY --chown=www-data:www-data composer.json composer.lock ./

# Passer à l'utilisateur non-root
USER www-data

# Installer les dépendances PHP avec Composer
RUN composer install --no-dev --optimize-autoloader

# Copier le reste du code source avec les bonnes permissions
COPY --chown=www-data:www-data src/ /var/www/html/src/
COPY --chown=www-data:www-data public/ /var/www/html/public/

# Exposer le port PHP-FPM (optionnel, car Nginx communique via le réseau Docker)
EXPOSE ${PHP_PORT}

# Lancer PHP-FPM
CMD ["php-fpm"]
