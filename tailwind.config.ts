// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveBubbles: "moveBubbles 6s ease-in-out infinite",
      },
      keyframes: {
        moveBubbles: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-50px) scale(1.1)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
