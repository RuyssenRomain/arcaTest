// renderHabitats.js - Gère l'affichage des habitats dans le DOM
import { fetchHabitats } from '../api/fetchHabitat';

/**
 * Fonction pour afficher les habitats récupérés dans le DOM.
 */
export function renderHabitats() {
    // Utilisation de .then() pour gérer la promesse renvoyée par fetchHabitats()
    fetchHabitats()
        .then(habitats => {
            const contentDiv = document.getElementById('content');
            if (habitats && habitats.length > 0) {
                habitats.forEach(habitat => {
                    const habitatSection = document.createElement('div');
                    habitatSection.classList.add('p-4', 'bg-white', 'rounded', 'shadow-md', 'mb-4');

                    const habitatTitle = document.createElement('h2');
                    habitatTitle.classList.add('text-2xl', 'font-bold', 'mb-2');
                    habitatTitle.textContent = habitat.name;

                    const habitatDescription = document.createElement('p');
                    habitatDescription.classList.add('text-gray-700');
                    habitatDescription.textContent = habitat.description;

                    habitatSection.appendChild(habitatTitle);
                    habitatSection.appendChild(habitatDescription);
                    contentDiv.appendChild(habitatSection);
                });
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'affichage des habitats:', error);
        });
}
