/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdd: { min: "951px" },
        smm: { max: "500px" },
      },
      colors:{
        'kasp-red': '#a6372d',
      },
    },
  },
  plugins: [],
};
