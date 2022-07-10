/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'anemo': "url('../src/assets/elements/anemo.svg')",
        'geo': "url('../src/assets/elements/geo.svg')", 
        'electro': "url('../src/assets/elements/electro.svg')",
        'pyro': "url('../src/assets/elements/pyro.svg')",
        'hydro': "url('../src/assets/elements/hydro.svg')",
        'cryo': "url('../src/assets/elements/cryo.svg')"
      }
    },
  },
  plugins: [],
}
