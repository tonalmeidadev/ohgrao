/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: "#1e2126"
      },
      gridTemplateColumns: {
        'auto': '2fr, 1fr, 1fr',
      },
      boxShadow: {
        'custom': 'inset 75px -100px 150px 0 #0D1015'
      }
    },
  },
  plugins: [],
}

