CREATE DATABASE IF NOT EXISTS aracadizoo_db;
USE aracadizoo_db;

-- Créer l'utilisateur 'arcadia' avec un mot de passe
CREATE USER 'arcadia'@'%' IDENTIFIED BY 'arcadia_password';

-- Accorder tous les privilèges à 'arcadia'
GRANT ALL PRIVILEGES ON *.* TO 'arcadia'@'%' WITH GRANT OPTION;

-- Appliquer les changements
FLUSH PRIVILEGES;

-- Création des tables
CREATE TABLE habitats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255)
);

CREATE TABLE animaux (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  habitat_id INT,
  clics INT DEFAULT 0,
  FOREIGN KEY (habitat_id) REFERENCES habitats(id)
);

CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insertion des données de test
INSERT INTO habitats (nom, description) VALUES
('Savane', 'Habitat pour les lions'),
('Jungle', 'Habitat pour les tigres'),
('Océan', 'Habitat pour les dauphins');

INSERT INTO animaux (nom, description, habitat_id) VALUES
('Lion', 'Le roi de la savane', 1),
('Tigre', 'Grand félin de la jungle', 2),
('Dauphin', 'Mammifère marin intelligent', 3);