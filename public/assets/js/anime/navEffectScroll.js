export function navEffectScroll() {
	const header = document.querySelector("header");

	let scrollFromTop = document.documentElement.scrollTop;
	let scrollTimeout;

	if (!header) {
		console.error("Header element not found!");
		return;
	}

	document.addEventListener("scroll", handleHeaderSwipe);

	function handleHeaderSwipe() {
		const currentScroll = document.documentElement.scrollTop;

		if (currentScroll > scrollFromTop) {
			// Défilement vers le bas - cacher le header et le sous-menu
			header.classList.add("-translate-y-full");
		} else {
			// Défilement vers le haut - afficher le header et le sous-menu
			header.classList.remove("-translate-y-full");
		}

		// Réinitialiser le délai si un autre événement de défilement se produit
		clearTimeout(scrollTimeout);

		// Définir un délai pour rétablir le header en position initiale après 2 secondes d'inactivité de défilement
		scrollTimeout = setTimeout(() => {
			header.classList.remove("-translate-y-full");
		}, 1000);

		// Mettre à jour la position de défilement
		scrollFromTop = currentScroll;
	}
}
