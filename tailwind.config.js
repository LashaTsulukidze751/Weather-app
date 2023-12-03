/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      backgroundColor: {

        'body': 'rgb(62,62,62)',
        'elems': 'rgb(68,68,68)'
      }
    },
  },
  plugins: [],
}

