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

        'dark_1': '#15202B',
        'dark_2': '#192734',
        'dark_3': '#22303C',
        'light_1': '#F2F2F2',
        'light_2': '#8899A6',
      }
    },
  },
  plugins: [],
}

