<?php

namespace App\Tools\utils;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Renderer {
    
    /**
     * callTwigRender permet d instancier twig, et de rendre la vues avec les parametres donnés
     *
     * @param  string $twigfiles Nom du template Twig à rendre (ex: 'Home.twig')
     * @param  array $params
     * @return void
     */
    public static function callTwigRender(string $twigfiles, array $params = []){

        // Récupérer l'environnement actuel à partir de .env ou définir 'production'
        $env = $_ENV['APP_ENV'] ?? 'developpement';

        // Initialiser Twig
        $loader = new FilesystemLoader(__DIR__ . '/../../Templates');
        $twig = new Environment($loader);

        // Ajouter l'environnement comme paramètre global
        $params['app_env'] = $env;

        // Rendre la vue Twig avec les paramètres passés
        echo $twig->render($twigfiles, $params);
    }

}
?>