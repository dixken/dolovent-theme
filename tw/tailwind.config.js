/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../theme/**/*.liquid"],
  prefix: 'tw-',
  theme: {
    extend: {
      //use prefix in order to save former CSS
      fontSize: {
        '20xl': '100rem',
      },
      fontFamily: {
        'custom': ['ubuntu-mono', 'Archivo', 'sans-serif']
      },
      borderRadius: {
        'header': '0 0 100% 100% / 0 0 20% 20%',
        'box-md': '10px 10px 100% 100% / 10px 10px 20% 20%',
        'box': '0 0 100% 100% / 0 0 20% 20%'
      },
    },
  },
  plugins: [],
  important: true
}

