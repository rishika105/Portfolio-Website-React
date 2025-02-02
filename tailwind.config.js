/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  colors: {
    dark: {
      100: "#0D0D0D",
      200: "#121212",
      300: "#181818",
      400: "#1E1E1E",
      500: "#252525",
      600: "#2D2D2D",
    },
    accent: {
      orange: "#FF4C29",
      pink: "#FF3860",
      purple: "#8B5CF6",
      cyan: "#06B6D4",
      aqua: "#14FFEC",
      yellow: "#FACC15",
      crimson: "#E63946",
      copper: "#9A3412",
      emerald: "#36D399",
      indigo: "#6366F1",
      rose: "#F43F5E",
    },
  },
  plugins: [],
}