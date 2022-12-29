/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    
    fontFamily: {
      'impact': ["Impact"]
    },
    extend: {
      blur: {
        xs: '2px'
      },
      screens: {
        'sm': '506px',
        // => @media (min-width: 506px) { ... }
  
        'md': '990px',
        // => @media (min-width: 860px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    base: false,
  }
}
