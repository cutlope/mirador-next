module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mirador: '#982F5B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
