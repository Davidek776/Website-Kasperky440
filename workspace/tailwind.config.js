/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: { min: "950px" },
      sm: { max: "500px" },
    },
  },
  plugins: [],
};
