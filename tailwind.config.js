/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'fondo-main': "url('./assets/images/Recurso_1.png')",
          'fondo-main2': "url('./assets/images/Recurso_2.png')",
        },
    },
  },
  plugins: [],
}

