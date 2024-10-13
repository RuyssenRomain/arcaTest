# Arcadia Zoo Application

Bienvenue dans le projet **Arcadia Zoo Application**, une application web moderne utilisant **PHP**, **Node.js** (Vite), **Tailwind CSS**, **MySQL**, **MongoDB**, et **Nginx**. Cette application est containerisée avec **Docker** et **Docker Compose**, offrant une configuration sécurisée, centralisée et évolutive.

## Table des Matières

1. [Introduction](#Introduction)
2. [Technologies Utilisées](#Technologies-Utilisées)
3. [Prérequis](#prérequis)
4. [Installation](#Installation)
    - [Cloner le Répertoire](#cloner-le-répertoire)
    - [Configurer le Fichier `.env`](#configurer-le-fichier-env)
    - [Initialiser Docker Swarm (Pour les Secrets)](#initialiser-docker-swarm-pour-les-secrets)
5. [Utilisation](#utilisation)
    - [Construire et Démarrer les Conteneurs](#construire-et-démarrer-les-conteneurs)
    - [Accéder à l'Application](#accéder-à-lapplication)
    - [Accéder à phpMyAdmin](#accéder-à-phpmyadmin)
6. [Sécurité](#sécurité)
    - [Gestion des Secrets](#gestion-des-secrets)
    - [Permissions du Fichier `.env`](#permissions-du-fichier-env)
7. [Développement](#développement)
    - [Modifier le Code](#modifier-le-code)
    - [Hot Module Replacement (HMR)](#hot-module-replacement-hmr)
8. [Déploiement en Production](#déploiement-en-production)
9. [Contribuer](#contribuer)
10. [Licence](#licence)

---
## Introduction <a name="Introduction"></a>

Arcadia est une application MVC destinée à optimiser l'expérience utilisateur et faciliter l'accès aux différentes fonctionnalités dédiées au fonctionnement du zoo. Elle propose un tableau de bord individualisé pour les différents acteurs du zoo.

---

## Technologies Utilisées <a name="Technologies Utilisées"></a>

- **Backend :** PHP 8.0-fpm-alpine
- **Frontend :** Node.js 20-alpine3.19 avec Vite et Tailwind CSS
- **Base de Données :** MySQL 5.7 et MongoDB 7.0
- **Serveur Web :** Nginx 1.21-alpine
- **Containerisation :** Docker & Docker Compose

---

## Prérequis  <a name="prérequis"></a>

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Docker** (version >= 20.10) : [Installation de Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** (version >= 1.29) : [Installation de Docker Compose](https://docs.docker.com/compose/install/)
- **Git** : [Installation de Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation  <a name="Installation"></a>


Ensuite, ajustez les variables d'environnement dans le fichier `.env` pour correspondre à vos besoins (comme les mots de passe, les ports, etc.).
### Cloner le Répertoire <a name=" Cloner le Répertoire"></a>

Clonez le dépôt Git de votre projet :

```bash
git clone https://github.com/RuyssenRomain/arcaTest.git
cd dockerzoo
```

### Configurer le Fichier `.env` <a name="Configurer le Fichier `.env`"></a>

Un fichier .env est fourni pour centraliser la configuration des variables d'environnement. Il suffit de le copier depuis l'exemple :

```bash
 cp .env.example .env
 ```
Ensuite, ajustez les variables d'environnement dans le fichier .env pour correspondre à vos besoins (comme les mots de passe, les ports, etc.).

### Initialiser Docker Swarm (Pour les Secrets)<a name="Initialiser Docker Swarm (Pour les Secrets)"></a>
En cours d'élaboration.