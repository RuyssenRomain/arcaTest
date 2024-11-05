// Import du fichier CSS Tailwind et des scripts nécessaires
import "../css/tailwind.css";
import "../css/main.css";

// Importation de Swiper uniquement une fois pour l’ensemble des fichiers
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importer les Swipers indépendamment
import './anime/swipper_animals.js';
import './anime/swipper_device.js';

// Autres scripts
import './app.js';
import './anime/burger.js';


// Autres scripts globaux ou spécifiques peuvent être ajoutés ici si nécessaire
console.log("Main.js chargé avec succès !");

document.addEventListener("DOMContentLoaded", () => {
        afficheBurgerMenu();
         ShowSubmenuHabitats(); 
         ShowNavMenuHabitats(); 
    });

    function afficheBurgerMenu() {
        const BurgerBtn = document.querySelector("#burger");
        const BurgerMenu = document.querySelector("#toggled-menu");
        const header = document.querySelector("header");
    
        BurgerBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            // Empêche la propagation pour éviter la fermeture immédiate
            const isChecked = BurgerBtn.getAttribute("aria-expanded") === "true";
            BurgerMenu.classList.toggle("-left-full");
            BurgerMenu.classList.toggle("left-0");
            header.classList.toggle("bg-custom-green");
            BurgerMenu.classList.toggle("bg-custom-green");
            BurgerBtn.setAttribute("aria-expanded", !isChecked);
        });
    
        // Fermer le menu burger si l'on clique à l'extérieur
        document.addEventListener("click", (event) => {
            if (!BurgerMenu.contains(event.target) && event.target !== BurgerBtn) {
                BurgerMenu.classList.add("-left-full");
                BurgerMenu.classList.remove("left-0");
                BurgerBtn.setAttribute("aria-expanded", "false");
                header.classList.remove("bg-custom-green");
                BurgerMenu.classList.remove("bg-custom-green");
            }
        });
    }

    function ShowSubmenuHabitats() {
        const arrowDown = document.querySelector("#arrow");
        const submenu = document.querySelector("#submenu");
        const ButtonCollapse = document.querySelector("#collapseHabitats");
    
        // Toggle le sous-menu avec animation au clic sur le bouton
        ButtonCollapse.addEventListener("click", (e) => {
            e.stopPropagation();
            const isExpanded = ButtonCollapse.getAttribute("aria-expanded") === "true";
    
            if (isExpanded) {
                // Fermer le sous-menu avec l'animation de disparition
                submenu.classList.remove("animate-fadeInScale");
                submenu.classList.add("animate-fadeOutScale");
                setTimeout(() => {
                    submenu.classList.add("hidden");
                    ButtonCollapse.setAttribute("aria-expanded", "false");
                }, 150); // Délai pour terminer l'animation
                arrowDown.classList.remove("rotate-180"); // Remet la flèche dans son état initial
            } else {
                // Afficher le sous-menu avec l'animation d'apparition
                submenu.classList.remove("hidden", "animate-fadeOutScale");
                submenu.classList.add("animate-fadeInScale");
                ButtonCollapse.setAttribute("aria-expanded", "true");
                arrowDown.classList.add("rotate-180"); // Tourne la flèche
            }
        });
    
        // Ferme le sous-menu au clic extérieur
        document.addEventListener("click", (event) => {
            const isExpanded = ButtonCollapse.getAttribute("aria-expanded") === "true";
            
            if (
                isExpanded && 
                !ButtonCollapse.contains(event.target) && 
                !submenu.contains(event.target)
            ) {
                // Fermer le sous-menu avec l'animation de disparition
                submenu.classList.remove("animate-fadeInScale");
                submenu.classList.add("animate-fadeOutScale");
                arrowDown.classList.remove("rotate-180"); // Remet la flèche dans son état initial
                setTimeout(() => {
                    submenu.classList.add("hidden");
                    ButtonCollapse.setAttribute("aria-expanded", "false");
                }, 150); // Délai pour terminer l'animation
            }
        });
    }
// test ouverture habitats dropdown de la navbar

function ShowNavMenuHabitats() {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu-habitats");
    const arrowDown = document.getElementById("arrowNav")

    // Toggle le menu avec animation au clic sur le bouton
    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        if (isExpanded) {
            arrowDown.classList.remove("rotate-180");
            menu.classList.remove("animate-fadeInScale");
            menu.classList.add("animate-fadeOutScale");
            setTimeout(() => {
                menu.classList.add("hidden");
                menuButton.setAttribute("aria-expanded", "false");
            }, 75);
        } else {
            menu.classList.remove("hidden", "animate-fadeOutScale");
            menu.classList.add("animate-fadeInScale");
            arrowDown.classList.add("rotate-180"); // Assure que le chevron est tourné vers le bas lors de l'ouverture
            menuButton.setAttribute("aria-expanded", "true");
        }
    });

    // Ferme le menu au clic extérieur
    document.addEventListener("click", (event) => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        if (
            isExpanded &&
            !menu.contains(event.target) &&
            event.target !== menuButton
        ) {
            arrowDown.classList.remove("rotate-180"); // Remet le chevron à sa position initiale lors de la fermeture
            menu.classList.remove("animate-fadeInScale");
            menu.classList.add("animate-fadeOutScale");
            setTimeout(() => {
                menu.classList.add("hidden");
                menuButton.setAttribute("aria-expanded", "false");
            }, 75);
        }
    });
}

  
  