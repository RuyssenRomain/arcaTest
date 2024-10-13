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
6. [Accéder à l'Application](#Accéder-à-l'Application)
    - [Application Web](#application-Web)
    - [Accéder à phpMyAdmin](#accéder-à-phpmyadmin)
    - [Accéder à MongoDb Compass](#Accéder-à-MongoDB-Compass)
7. [Déploiement](#déploiement)
    - [Docker Swarm](#gestion-des-secrets)
    - [En cours de construction ](#en-cours-de-construction)
8. [sécurité](#sécurité)
    - [gestion-des-secrets](#gestion-des-secrets)
    - [Permissions du Fichier `.env`](#permissions-du-fichier-env)
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

Clonez le dépôt Git de votre projet :

```bash
git clone https://github.com/RuyssenRomain/arcaTest.git
cd dockerzoo
```
Selectionner la branche Version2-docker-MVC :

```bash 
git checkout Version2-docker-MVC
```

### Configurer le Fichier `.env`

Un fichier .env.exmple vous est fourni pour aider à centraliser la configuration des variables d'environnement. 

    Exécuter ce code dans votre terminal pour initialiser votre fichier .env :
```bash
 cp .env.example .env
 ```
Ensuite, ajustez les variables d'environnement dans le fichier .env pour correspondre à vos besoins (comme les mots de passe, les ports, etc.).


## Installer les Dépendances Backend
Si votre projet utilise `Composer` pour gérer les dépendances PHP, vous devez installer les bibliothèques nécessaires.

 - `Depuis le Conteneur PHP` 
    Exécutez les commandes suivantes pour accéder au conteneur PHP et installer les dépendances :
```bash
    docker-compose exec php sh
    composer install
    exit
```

 - `Ou depuis l'Hôte` (si vous avez PHP et Composer installés)
    ```bash 
        composer install    
    ```
    Cela installera les dépendances définies dans le fichier composer.json à la racine du projet.

## Installer les Dépendances Front-end
Pour installer les dépendances front-end, vous devez utiliser npm.

 - `depuis le conteneur Node.js`
    Executer cette commande pour accéder au conteneur Node.js et installer les dépendances :
```bash
    docker-compose exec node sh
    npm install
    exit
```

 - `Ou depuis l'hôte` (si vous avez npm installés)
 ```bash
 npm install
```
    Cela installera les dépendances définies dans le fichier package.json à la racine du projet.

### Construire et Démarrer les Conteneurs

```bash
docker-compose build
```  
```bash
docker-compose up -d
```
```bash 
npm install
```
Explications :
 - `docker-compose build` : Construit les images Docker en fonction des Dockerfiles.
 - `docker-compose up -d` : Démarre les conteneurs en arrière-plan.
 - `npm install` : Installer les différentes dépendances.
 - ``


### Accéder à l'Application

### Initialiser Docker Swarm (Pour les Secrets)
En cours d'élaboration.
