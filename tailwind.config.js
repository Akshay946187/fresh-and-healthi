/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primery:'#E83667',
        primaryDark :'#BB2C51',
        secondary:'#21D4B9',
        dark:'#303030'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem'
        }
        
      }
    },
  },
  plugins: [],
}

