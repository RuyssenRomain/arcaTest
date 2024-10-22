FROM php:8.0-fpm-alpine

# Installer les extensions PHP nécessaires et d'autres outils
RUN apk add --no-cache \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libxpm-dev \
    freetype-dev \
    zip \
    libzip-dev \
    oniguruma-dev \
    bash \
    && docker-php-ext-configure zip \
    && docker-php-ext-install pdo pdo_mysql zip

# Installer Composer depuis l'image composer:2.1
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers de l'application
COPY ./composer.json ./composer.lock ./
COPY ./src /var/www/html/src
COPY ./public /var/www/html/public

# Installer les dépendances PHP --<--no-dev est utilisé pour installer uniquement les dépendances nécessaires en production, excluant ainsi les dépendances de développement.>
RUN composer install --no-dev --optimize-autoloader

# Changer les permissions
RUN chown -R www-data:www-data /var/www/html

# Exposer le port PHP-FPM
EXPOSE 9000

# Démarrer PHP-FPM
CMD ["php-fpm"]
