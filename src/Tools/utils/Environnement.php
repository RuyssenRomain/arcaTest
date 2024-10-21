<?php

namespace App\tools\utils;

/**
 * Classe utilitaire pour vérifier l'environnement de l'application.
 */
class Environnement
{
    /**
     * Vérifie si l'environnement est en mode développement.
     *
     * @return bool Retourne true si APP_ENV est égal à 'developpement', sinon false.
     */
    public static function isDeveloppement(): bool
    {
        return ($_ENV['APP_ENV'] ?? 'production') === 'developpement';
    }

    /**
     * Vérifie si l'environnement est en mode production.
     *
     * @return bool Retourne true si APP_ENV est égal à 'production', sinon false.
     */
    public static function isProduction(): bool
    {
        return ($_ENV['APP_ENV'] ?? 'production') === 'production';
    }
}
