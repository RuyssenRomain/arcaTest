<?php

namespace App\Controllers;

use App\tools\utils\Renderer;


/**
 * Contrôleur pour gérer les actions liées à la page d'accueil.
 */
class HomeController
{

    public function index()
    {
        // Paramètres à passer à la vue
        $params = [
            'titleHead' => 'ZOO ARCADIA',
            'title' => 'Bienvenue',
            'message' => 'Plongez dans l\'harmonie de la forêt de Brocéliande. Découvrez les animaux du monde entier.'
        ];

        // Appeler la méthode statique pour rendre la vue
        Renderer::callTwigRender('home.twig', $params);
    }
}
