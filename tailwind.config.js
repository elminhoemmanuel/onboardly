module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      
      backgroundImage: theme => ({
        'hero-bg': "url('/images/farmhero.jpg')",
       }),
      colors: {
        purple:"#1A014E",
        purplealt:"#9F76FB",
        newgray:"#F8F8FD",
        header:"#383838",
        purplegray:"#9388AD",
      }
    },

    screens: {
      'xs': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
