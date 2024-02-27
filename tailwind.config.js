/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './app/src/**/*.{html,js,ts,jsx,tsx,css,scss}',
    './app/src/index.html',
  ],
  darkMode: 'media', // or you can remove this line if you don't plan to use dark mode
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
