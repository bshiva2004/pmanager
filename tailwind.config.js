/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Look for Tailwind classes in all js, jsx, ts, and tsx files in the src folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/allsvgs/wallpaper vinlandsaga.png')",
      }
    }, // You can extend Tailwind's default theme here if needed
  },
  plugins: [], // You can add plugins here, if needed
}

