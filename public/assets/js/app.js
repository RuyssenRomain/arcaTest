// app.js - Gérer les appels API et affichages en fonction de la page visitée

import { renderHabitats } from './ui/renderHabitats';
// import { renderAnimals } from './ui/renderAnimals';
// import { renderServices } from './ui/renderServices';

// Fonction pour détecter la page courante et exécuter le bon render
function handlePageRendering() {
    const currentPath = window.location.pathname;

    if (currentPath === '/' || currentPath === '/accueil') {
        // Page d'accueil - Affiche tous les contenus
        renderHabitats();
        // renderAnimals(); //pas encore construit pour pouvoir tester application et  a décommenter apres création des fichier ;js 
        // renderAnimals(); //pas encore construit pour pouvoir tester application et  a décommenter apres création des fichier ;js 
        // renderServices();
    } else if (currentPath === '/habitats') {
        // Page dédiée aux habitats - n'affiche que les habitats
        renderHabitats();
    } else if (currentPath === '/services') {
        // Page dédiée aux services - n'affiche que les services
        renderServices();
    } else if (currentPath === '/animaux') {
        // Page dédiée aux animaux - n'affiche que les animaux
        renderAnimals();
    } else {
        console.error('Page non reconnue pour le rendu spécifique.');
    }
}

// Exécuter le rendu de la page spécifique une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', handlePageRendering);
