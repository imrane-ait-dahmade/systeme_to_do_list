/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gradientStart: '#F7F779', // Couleur de départ
        gradientEnd: '#FBD07C',   // Couleur de fin
        textcolor:'#FC9B13',
      },
fontFamily:{
  Edu:['Edu AU VIC WA NT Pre','serif'],
  mont:['Montserrat',' serif']
},
    },
  },
  plugins: [],
};
