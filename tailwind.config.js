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
        'custom-white': '#F5F5F5',
          // Ajoute la couleur personnalisée ici
      },
      fontFamily: {
        'Merri': ['Merriweather', 'sans-serif'],
        'lato' : ['lato', 'sans-serif']
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.80)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOutScale: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.8)' },
        },
      },
      animation: {
        fadeInScale: 'fadeInScale 0.2s ease-out forwards',
        fadeOutScale: 'fadeOutScale 0.075s ease-in forwards',
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
