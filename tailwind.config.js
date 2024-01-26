/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jacques: ['Jacques Francois', 'serif'],
        inter:['Inter', 'sans-serif'],
        Montserrat:['Montserrat'," sans-serif"]
      },
    },
  },
  plugins: [],
}

