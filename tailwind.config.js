/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb5d3a',
        heading: '#ffffff',
        subtitle: '#cccccc',
        border: 'rgba(119, 119, 125, 0.2)',
        background: '#000000',
        greybg: '#E6EAEE',
        accent: '#FF6B6B'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem'
      }
    }
  },
  plugins: []
};
