/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      slate: "#8697b3",
      grey: "#f3f1f1",
      yellow: "#fff6df",
      pink: "#fb88a9",
      purple: "#b191c5",
      lightblue: "#dfebff",
    }),
    extend: {},
  },
  plugins: [],
};
