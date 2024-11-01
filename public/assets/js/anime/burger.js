
// Fonction pour l'animation de la croix du burger-menu


	const burger = document.getElementById("burger");
	const burgerMenu = document.getElementById("toggled-menu");

	burger.addEventListener("click", (e) => {
		e.stopPropagation();
		const isOpen = burger.getAttribute("aria-expanded") === "true"; // Vérifie l'état actuel

		if (!isOpen) {
			// Étape 1 : Les barres se déplacent vers le centre
			burger.classList.add("center");

			// Après un court délai, passe à l'état croisé
			setTimeout(() => {
				burger.classList.add("cross");
				burger.setAttribute("aria-expanded", "true");
			}, 200); // 200ms correspond à la durée de transition définie dans le CSS
		} else {
			// Étape 3 : Les barres se déplacent de l'état croisé vers le centre
			burger.classList.remove("cross");

			// Après un court délai, les barres retournent à leur position initiale
			setTimeout(() => {
				burger.classList.remove("center");
				burger.setAttribute("aria-expanded", "false");
			}, 200);
		}
	});

	// Ferme le burger menu en cliquant en dehors
	document.addEventListener("click", (event) => {
		const isOpen = burger.getAttribute("aria-expanded") === "true";

		if (
			isOpen &&
			!burger.contains(event.target) &&
			event.target !== burger &&
			!burgerMenu.contains(event.target)
		) {
			burger.classList.remove("cross");

			// Après un court délai, les barres retournent à leur position initiale
			setTimeout(() => {
				burger.classList.remove("center");
				burger.setAttribute("aria-expanded", "false");
			}, 200);
		}
	});

