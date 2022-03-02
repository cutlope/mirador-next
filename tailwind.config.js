module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-40': 'repeat(2, minmax(0, 1fr))',
      },
      colors: {
        mirador: '#982F5B',
        miradorGreen: '#386C79',
      },
      backgroundImage: {
        'left-flower': "url('/Group 48.svg')",
        'right-flower': "url('/Group 47.svg')",
        'left-float': 'url("/Scroll Group 2.svg")',
        'right-float': 'url("/Scroll Group 3.svg")',
        'right-image': 'url("/Scroll Group 4.svg")',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
