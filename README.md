# Arcadia Zoo Application

Bienvenue dans le projet **Arcadia Zoo Application**, une application web moderne utilisant **PHP**, **Node.js** (Vite), **Tailwind CSS**, **MySQL**, **MongoDB**, et **Nginx**. Cette application est containerisée avec **Docker** et **Docker Compose**, offrant une configuration sécurisée, centralisée et évolutive.

## Table des Matières

1. [Introduction](#introduction)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Prérequis](#prérequis)
4. [Installation](#installation)
    - [Cloner le Répertoire](#cloner-le-répertoire)
    - [Configurer le Fichier `.env`](#configurer-le-fichier-env)
    - [Installer les Dépendances Backend](#installer-les-Dépendances-Backend)
    - [Installer les Dépendances Front-end](#installer-les-Dépendances-Front-end)
5. [Construire et Démarrer les Conteneurs](#construire-et-Démarrer-les-Conteneurs)
    - [Commandes Utiles](#commandes-Utiles)
6. [Accéder à l'Application](#accéder-à-l'application)
    - [Application Web](#application-Web)
    - [Accéder à phpMyAdmin](#accéder-à-phpmyadmin)
    - [Accéder à MongoDb Compass](#accéder-à-MongoDB-Compass)
7. [Déploiement](#déploiement)
    - [Docker Swarm](#gestion-des-secrets)
    - [En cours de construction ](#en-cours-de-construction)
8. [sécurité](#sécurité)
    - [gestion-des-secrets](#gestion-des-secrets)
    - [recommandations](#recommandations)
8. [Développement](#développement)
    - [Hot Module Replacement (HMR)](#hot-module-replacement-hmr)
10. [Contribuer](#contribuer)
11. [Licence](#licence)
12. [Contact](#contact)
13. [capture écran application]("capture-écran-application)


## Introduction

Arcadia est une application MVC destinée à optimiser l'expérience utilisateur et faciliter l'accès aux différentes fonctionnalités dédiées au fonctionnement du zoo. Elle propose un tableau de bord individualisé pour les différents acteurs du zoo.

## Technologies Utilisées

- **Backend :** PHP 8.0-fpm-alpine
- **Frontend :** Node.js 20-alpine3.19 avec Vite et Tailwind CSS
- **Base de Données :** MySQL 5.7 et MongoDB 7.0
- **Serveur Web :** Nginx 1.21-alpine
- **Containerisation :** Docker & Docker Compose

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Docker** (version >= 20.10) : [Installation de Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** (version >= 1.29) : [Installation de Docker Compose](https://docs.docker.com/compose/install/)
- **Git** : [Installation de Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation

### Cloner le Répertoire

**Clonez** le dépôt **Git** de votre projet :

```bash
git clone https://github.com/RuyssenRomain/arcaTest.git
cd dockerzoo
```
Selectionner la branche **Version2-docker-MVC** :

```bash 
git checkout Version2-docker-MVC
```

### Configurer le Fichier `.env`

Un fichier .env.exmple vous est fourni pour aider à centraliser la configuration des variables d'environnement. 

    Exécuter ce code dans votre terminal pour initialiser votre fichier `.env` :
```bash
 cp .env.example .env
 ```
Ensuite, ajustez les variables d'environnement dans le fichier `.env` pour correspondre à vos besoins (comme les mots de passe, les ports, etc.).


## Installer les Dépendances Backend
Si votre projet utilise `Composer` pour gérer les dépendances **PHP**, vous devez installer les bibliothèques nécessaires.

 - **Depuis le Conteneur PHP** 
    Exécutez les commandes suivantes pour accéder au conteneur **PHP** et installer les dépendances :
```bash
    docker-compose exec php sh
    composer install
    exit
```

 - **Ou depuis l'Hôte** (si vous avez PHP et Composer installés)
```bash 
    composer install    
```
    Cela installera les dépendances définies dans le fichier composer.json à la racine du projet.

### Installer les Dépendances Front-end
Pour installer les dépendances front-end, vous devez utiliser npm.

 - **depuis le conteneur Node.js**
    Executer cette commande pour accéder au conteneur Node.js et installer les dépendances :
```bash
    docker-compose exec node sh
    npm install
    exit
```

 - **Ou depuis l'hôte** (si vous avez npm installés)
```bash
 npm install
```
    Cela installera les dépendances définies dans le fichier package.json à la racine du projet.

## Construire et Démarrer les Conteneurs

A la racine du projet, executer cette commande :

```bash
docker-compose build
```  

```bash
docker-compose up -d
```

Explications :
 - `docker-compose build` : Construit les images Docker en fonction des Dockerfiles.
 - `docker-compose up -d` : Démarre les conteneurs en arrière-plan (Si images déjà construites). 


### Commandes Utiles

- Démarrer les Conteneurs
```bash
docker-compose start
```

- Arrêter les Conteneurs
```bash
docker-compose stop
```

- Arrêter et Supprimer les Conteneurs
```bash
docker-compose down
```

- Afficher les Logs d'un Conteneur
```bash
docker-compose logs [nom_du_service]
```

## Accéder à l'Application

### Application Web
 - **URL** : [http://localhost:8080](http://localhost:8080) 

### Accéder à phpMyAdmin
 - **URL** : [http://localhost:8081](http://localhost:8081) 
 - **Serveur** : `Mysql`
 - **Utilisateur** : `arcadiaUser`(défini dans le fichier `.env`)
 - **Utilisateur** : `VotreMotDePasse`(défini dans le fichier `.env`)

### Accéder à MongoDb compasse (si configuré)
 - **URL** : [http://localhost:8082](http://localhost:8082)
 - **Utilisateur** :  `admin`(défini dans le fichier `.env`)
 - **Mot de Passe** :  `VotreMotDePasseAdmin`(défini dans le fichier `.env`)

## Déploiement

### docker swarm
Pour déployer l'application dans un environnement de production avec une orchestration plus avancée, vous pouvez utiliser **Docker Swarm**.

**Initialiser Docker Swarm**
```bash
docker swarm init
```

**Déployer le Stack**
```bash
docker stack deploy -c docker-compose.yml arcadia ( à ajuster après avancement)
```

## Sécurité

### Gestion-des-secrets
En production, il est recommandé d'utiliser Docker Secrets pour gérer les informations sensibles.

**Créer des secrets :**
```bash
echo "VotreMotDePasseRoot" | docker secret create mysql_root_password -
echo "VotreMotDePasse" | docker secret create mysql_password -
echo "VotreMotDePasseAdmin" | docker secret create mongo_root_password -
```

**Modifier** `docker-compose.yml` pour Utiliser les Secrets
Dans le fichier `docker-compose.yml` **modifiez les services** pour utiliser les secrets :

```bash
services:
  mysql:
    image: mysql:5.7
    secrets:
      - mysql_root_password
      - mysql_password
    # Autres configurations...

  mongo:
    image: mongo:7.0
    secrets:
      - mongo_root_password
    # Autres configurations...

secrets:
  mysql_root_password:
    external: true
  mysql_password:
    external: true
  mongo_root_password:
    external: true
```

### Recommandations

Considérations pour la Production
 - Utiliser des Utilisateurs Non-Root: Configurez vos conteneurs pour qu'ils s'exécutent avec des utilisateurs non-root pour renforcer la sécurité.

 - Optimiser les Images Docker : Supprimez les dépendances de développement et n'incluez que ce qui est nécessaire pour l'exécution.

 - Configurer les Réseaux : Limitez l'exposition des ports et assurez-vous que seuls les services nécessaires peuvent communiquer entre eux.

 - Mises à Jour et Patches : Gardez vos images Docker et dépendances à jour avec les derniers correctifs de sécurité.

## Développement

### Hot Module Replacement (HMR)
 Le Hot Module Replacement permet de recharger automatiquement les modules lors du développement, sans avoir à recharger toute la page.

 - Configuration : 
 - - **Vite.js** :  est configuré pour le HMR en mode développement.
 - - **Nginx** : proxy les requêtes vers le serveur de développement Vite.js.

 - Utilisation
 - - Lancer le serveur de développement :
```bash
docker-compose exec node npm run dev
```
 - - Accédez à l'application à http://localhost:8080. Les modifications apportées aux fichiers front-end seront reflétées instantanément.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer au projet :
1. **Fork** le dépot.
2. **Créer** une branche pour votre fonctionnalité le dépot(`git checkout -b feature/ma-fonctionnalité`).
3. **Commit** os modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité`).
4. **Push** a branche (`git push origin feature/ma-fonctionnalité`).
5. **Ouvrir** une Pull Request.
 
## Licence
Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](https://loantruong.github.io/choose-license/licences/licence-mit.html) pour plus de détails.

## Contact

 - **Nom :** Ruyssen romain
 - **Email :** Adresse Email à ajouter plus tard
 - **Github :** Compte github à ajouter

## capture écran application
A intégrer progressivement.