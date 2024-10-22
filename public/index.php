<?php
 
 // Inclure les constantes globales

use App\Router\Router;

 require_once __DIR__. '/../src/Config/constantes.php';
 
 // Charger l'autoload de Composer
 require_once __DIR__ . '/../vendor/autoload.php';
 
 $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . './../');
 $dotenv->load();
// Initialisation du routeur
$router = new Router;



$router->dispatch();