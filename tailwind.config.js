/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EE',
        sand: '#ECE6DB',
        clay: '#A56A4E',
        claydeep: '#824E37',
        ink: '#221F1B',
        muted: '#8C857A',
        line: '#E2DBCF',
        sage: '#8B9A87',
        sky: '#A9C4D4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
