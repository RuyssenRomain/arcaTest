
# DockerZoo - Projet Fullstack avec Docker

## Sommaire
1. [Description du projet](#description-du-projet)
2. [Technologies](#technologies)
3. [Prérequis](#prérequis)
4. [Installation](#installation)
   - [Clonage du projet](#clonage-du-projet)
   - [Configuration de l'environnement](#configuration-de-lenvironnement)
5. [Lancement des conteneurs](#lancement-des-conteneurs)
6. [Accès aux services](#accès-aux-services)
7. [FAQ](#faq)
8. [Contribuer](#contribuer)

---

## 1. Description du projet <a name="description-du-projet"></a>

DockerZoo est un projet d'application web fullstack avec séparation des composants backend et frontend. Le backend est développé en PHP avec une architecture MVC, tandis que le frontend utilise Vite.js pour des performances accrues. Tout est géré via Docker pour simplifier le développement et le déploiement.

---

## 2. Technologies <a name="technologies"></a>

- **Backend** : PHP 8 (architecture MVC)
- **Frontend** : Vite.js
- **Base de données** : MySQL 5.7 et MongoDB
- **Serveur web** : Nginx
- **Conteneurs** : Docker & Docker Compose

---

## 3. Prérequis <a name="prérequis"></a>

Avant de démarrer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Docker** : [Installation Docker](https://docs.docker.com/get-docker/)
- **Docker Compose** : [Installation Docker Compose](https://docs.docker.com/compose/install/)
- **Git** : [Installation Git](https://git-scm.com/)

---

## 4. Installation <a name="installation"></a>

### Clonage du projet <a name="clonage-du-projet"></a>

Commencez par cloner le projet depuis GitHub :

```bash
git clone https://github.com/votre-utilisateur/dockerzoo.git
cd dockerzoo
```

### Configuration de l'environnement <a name="configuration-de-lenvironnement"></a>

Un fichier `.env` est fourni pour centraliser la configuration des variables d'environnement. Il suffit de le copier depuis l'exemple :

```bash
cp .env.example .env
```

Ensuite, ajustez les variables d'environnement dans le fichier `.env` pour correspondre à vos besoins (comme les mots de passe, les ports, etc.).

---

## 5. Lancement des conteneurs <a name="lancement-des-conteneurs"></a>

Après avoir configuré votre environnement, exécutez la commande suivante pour lancer les conteneurs Docker :

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

Cette commande va :
- Télécharger les images nécessaires (PHP, MySQL, MongoDB, Nginx, etc.)
- Construire les conteneurs pour chaque service
- Démarrer tous les services en mode détaché (`-d`)

---

## 6. Accès aux services <a name="accès-aux-services"></a>

Une fois les conteneurs démarrés, vous pouvez accéder aux services suivants :

- **Frontend (Vite.js)** : [http://localhost:5178](http://localhost:5178)
- **Backend (PHP/Nginx)** : [http://localhost:8082](http://localhost:8082)
- **phpMyAdmin (MySQL)** : [http://localhost:8081](http://localhost:8081)

---

## 7. FAQ <a name="faq"></a>

### Comment puis-je ajouter de nouvelles dépendances au projet ?

- **Pour le backend (PHP)** : Modifiez le fichier `composer.json` dans le dossier `backend`, puis exécutez `composer install` dans le conteneur PHP.
- **Pour le frontend (Vite.js)** : Modifiez le fichier `package.json` dans le dossier `frontend`, puis exécutez `npm install` dans le conteneur Node.js.

---

## 8. Contribuer <a name="contribuer"></a>

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** ce dépôt.
2. Créez une nouvelle branche : `git checkout -b feature/ma-feature`.
3. Faites vos modifications, puis **commit** : `git commit -m "Ajout de ma fonctionnalité"`.
4. **Push** sur votre dépôt : `git push origin feature/ma-feature`.
5. Créez une **Pull Request** vers la branche `main` de ce dépôt.
