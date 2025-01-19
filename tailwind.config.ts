// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",      // Escanea los archivos dentro de src
    "./pages/**/*.{js,ts,jsx,tsx}",    // Escanea las páginas
    "./components/**/*.{js,ts,jsx,tsx}" // Escanea los componentes
  ],
  theme: {
    extend: {
      // Agregando animación personalizada
      animation: {
        moveBubbles: "moveBubbles 6s ease-in-out infinite",
      },
      // Definiendo las keyframes para la animación personalizada
      keyframes: {
        moveBubbles: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-50px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [], // Plugins adicionales si es necesario
};
