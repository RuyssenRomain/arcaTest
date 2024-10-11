# Arcadia Zoo Application

## Introduction

Arcadia est une application MVC destinée à optimiser l'expérience utilisateur et faciliter l'accès aux différentes fonctionnalités dédiées au fonctionnement du zoo. Elle propose un tableau de bord individualisé pour les différents acteurs du zoo.

## Technologies Utilisées

- **Backend :** PHP 8.0-fpm-alpine
- **Frontend :** Node.js 20-alpine3.19 avec Vite et Tailwind CSS
- **Base de Données :** MySQL 5.7 et MongoDB 7.0
- **Serveur Web :** Nginx 1.21-alpine
- **Containerisation :** Docker & Docker Compose

## Prérequis

- **Docker** (version >= 20.10)
- **Docker Compose** (version >= 1.29)

## Installation

1. **Cloner le Répertoire :**

    ```bash
    git clone <repository-url>
    cd arcadia
    ```

2. **Configurer les Variables d'Environnement :**

    Copier le fichier `.env.example` en `.env` et ajuster les variables si nécessaire.

    ```bash
    cp .env.example .env
    ```

    Assurez-vous que `APP_ENV` est défini à `development` pour le développement.

3. **Démarrer les Conteneurs Docker :**

    ```bash
    docker-compose up --build
    ```

4. **Accéder à l'Application :**

    Ouvrez votre navigateur et naviguez vers [http://localhost:8080](http://localhost:8080).

5. **Accéder à phpMyAdmin :**

    Naviguez vers [http://localhost:8081](http://localhost:8081) pour gérer la base de données MySQL.

## Développement

### Scripts npm

- **Démarrage en Développement :**

    ```bash
    npm run dev
    ```

    Cela démarre le serveur Vite avec HMR sur le port défini dans `.env` (par défaut 5172).

- **Compilation pour la Production :**

    ```bash
    npm run build
    ```

    Cela compile les assets pour la production dans le dossier `public/dist`.

## Dépannage

- **Classes Tailwind CSS Manquantes :**
    - Assurez-vous que `tailwind.config.js` inclut tous les chemins des fichiers contenant des classes Tailwind.
    - Vérifiez que les fichiers CSS sont correctement importés dans `main.js`.

- **HMR Ne Fonctionne Pas :**
    - Vérifiez que les scripts dans `index.php` pointent vers le bon port (`5172`).
    - Assurez-vous que le port est correctement mappé dans `docker-compose.yml`.
    - Vérifiez les logs du conteneur Node et la console du navigateur pour identifier les erreurs.

- **Erreur 502 Bad Gateway :**
    - Vérifiez la configuration de Nginx pour s'assurer qu'elle pointe vers les bons conteneurs et ports.
    - Vérifiez les logs de Nginx et des conteneurs PHP et Node pour identifier les causes de l'erreur.
    - Assurez-vous que les conteneurs PHP et Node sont en cours d'exécution et accessibles.

- **Problèmes de Compilation CSS :**
    - Accédez au conteneur Node et vérifiez les fichiers CSS compilés.
    - Consultez les logs du conteneur Node pour détecter des erreurs.

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre les règles de codage et soumettre des pull requests avec des descriptions claires.

## Licence

[MIT](LICENSE)
