/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'discover': '#E3E1DC' 
      },
      fontFamily:{
        "mon": ["Montserrat", "sans-serif"]
      },
      fontSize:{
        "40px": "2.5rem",
        "24px": "1.5rem"
      },
      spacing:{
        '150': '150vh',
        "130": "130vh",
        "110": "110vh"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
        "4": "repeat(4, 1fr)",
        "2/3": "1fr 2fr"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
        "mob": "1fr 2fr",
        
      }
    },
  },
  plugins: [],
}