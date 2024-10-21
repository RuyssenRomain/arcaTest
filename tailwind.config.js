module.exports = {
  content: [
    './src/**/*.{html,js,php,twig}',
    './public/**/*.{html,php,js}',
  ],
  theme: {
    extend: {
      textShadow: {
        black: '2px 2px 4px rgba(0, 0, 0, 0.8)',  // Ombre noire
      },
      colors: {
        'custom-beige': '#E7DBC2',
        'custom-brown': '#5A4836',
        'custom-green': '#182D20',
        'green-links': '#B4D0BD',
          // Ajoute la couleur personnalisée ici
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-Black': {
          'text-shadow': '2px 2px 4px rgba(0 0 0 / 0.03)',
        },
      };

      addUtilities(newUtilities);
    },
  ],
}
