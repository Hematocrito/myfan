module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#8DDDFF',
          150: '#7ECEF1',
          250: '#80d8ff',
          450: '#00b2ff',
          550: '#003A53',
          650: '#006794',
          750: '#003349',
        },
        'maf-green': '#0AFF00',
        'maf-red': '#FE0018',
        'maf-pink': '#FF00A0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
