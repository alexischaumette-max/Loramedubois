// Configuration du style du site (Tailwind CSS).
// Le fichier assets/site.css est regénéré automatiquement par GitHub (voir .github/workflows/build-css.yml)
// à chaque modification de index.html : il suffit de modifier index.html comme d'habitude.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        wood: { 50: '#fdfbf7', 100: '#f7f2e8', 200: '#eee2cd', 300: '#dfcaaa', 400: '#ccaa7f', 500: '#ba8a58', 600: '#a37143', 700: '#845737', 800: '#6d4531', 900: '#5a3b2b', 950: '#321d15' },
        amberGold: '#d97706',
      },
      fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] },
    },
  },
};
