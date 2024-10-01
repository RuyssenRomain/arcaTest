FROM php:8.0-fpm-alpine

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo_mysql

# Installer Composer
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier le fichier composer.json et composer.lock
COPY backend/composer.json backend/composer.lock ./

# Installer les dépendances PHP
RUN composer install

# Copier le reste du code
COPY backend/ /var/www/html

# Exposer le port PHP_FPM
EXPOSE ${PHP_PORT}

CMD ["php-fpm"]
