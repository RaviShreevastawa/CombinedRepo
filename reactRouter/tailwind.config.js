/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode using class (important for Redux-based toggling)
  theme: {
    extend: {},
  },
  plugins: [],
};
