<?php

/**
 * Fichier pour définir toutes les routes de l'application.
 */

// Route pour la page d'accueil (qui appelle HomeController@index)
$router->map('GET', '/', 'HomeController#index');
