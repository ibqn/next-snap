/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.{js,jsx}', 'src/components/**/*.{js,jsx}'],

  theme: {
    screens: {
      md: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}
