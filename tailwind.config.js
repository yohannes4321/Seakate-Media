/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-yellow': '#FFD700',
        teal: {
          400: '#04E4D8',
          DEFAULT: '#04E4D8', // Default teal color
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
