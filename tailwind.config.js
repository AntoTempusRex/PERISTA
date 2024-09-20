/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./web/**/*.{html,js}",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
    // './index.html',
    // './daftar.html',
    // './homepage.html',
  ],
  theme: {
    extend:{
      colors: {
      'PERSITA-orange': '#F06C27',
      'PERSITA-abu-abu': '#E5E7EB',
      'PERSITA-abu-stroke': '#9CA3AF',
      'PERSITA-orange-invert': '#0f93d8',
      },
      fontFamily: {
        Aquire: ['"Aquire"'],
        Sansation: ['"Sansation"'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}