/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        light: '#8ECAE6',
        DEFAULT: '#219EBC',
        dark: '#023047',
      },
      secondary: {
        DEFAULT: '#FFB703',
        dark: '#FB8500',
      },
    },
    extend: {},
  },
  plugins: [],
}
