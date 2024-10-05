CREATE DATABASE IF NOT EXISTS aracadizoo_db;
USE aracadizoo_db;

-- Supprimer l'utilisateur s'il existe déjà
DROP USER IF EXISTS 'arcadiaUser'@'%';

DROP DATABASE IF EXISTS arcatest;


-- Créer l'utilisateur 'arcadiaUser' avec un mot de passe
CREATE USER 'arcadiaUser'@'%' IDENTIFIED BY 'Password';

-- Accorder tous les privilèges à 'arcadiaUser' sur la base de données spécifique
GRANT ALL PRIVILEGES ON aracadizoo_db.* TO 'arcadiaUser'@'%' WITH GRANT OPTION;

-- Appliquer les changements
FLUSH PRIVILEGES;

-- Création des tables (avec IF NOT EXISTS)
CREATE TABLE IF NOT EXISTS habitats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS animaux (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  habitat_id INT,
  clics INT DEFAULT 0,
  FOREIGN KEY (habitat_id) REFERENCES habitats(id)
);

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insertion des données de test (avec INSERT IGNORE)
INSERT IGNORE INTO habitats (nom, description) VALUES
('Savane', 'Habitat pour les lions'),
('Jungle', 'Habitat pour les tigres'),
('Océan', 'Habitat pour les dauphins');

INSERT IGNORE INTO animaux (nom, description, habitat_id) VALUES
('Lion', 'Le roi de la savane', 1),
('Tigre', 'Grand félin de la jungle', 2),
('Dauphin', 'Mammifère marin intelligent', 3);
