/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        customColor: '#FEF8E5',
        brown: {
          '700': '#4a2c14', // Adjust color code to match your desired brown
        },
      },
    },
  },
  plugins: [],
}
