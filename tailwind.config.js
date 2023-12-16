/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        boxShadow: {
        '3xl': '0px 20px 60.571px 0px #E5E9F6',
      },
        boxShadow: {
        '4xl': '12.114px 48.457px 60.571px 0px rgba(229, 233, 246, 0.40)',
      },
        boxShadow: {
        '5xl': '0px 20px 50px 0px rgba(39, 0, 124, 0.50)',
      },
      backgroundImage:{
          "gradient-radial":" linear-gradient(91deg, #5F21E9 60.06%, #FA00FF 103.73%)",
      }
    },
  },
  plugins: [],
}

