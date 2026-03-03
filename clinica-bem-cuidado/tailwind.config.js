export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bem-cuidado': '#5fb9e6', // azul da clínica
        'accent-yellow': '#ffcc00', // amarelo da borda
      },
    },
  },
  plugins: [],
}