/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdd: { min: "951px" },
        smm: { max: "500px" },
        '3xl': "1921",
      },
      colors:{
        'kasp-red': '#a6372d',
      },
    },
  },
  plugins: [],
};
