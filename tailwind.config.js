/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-off-white': 'rgb(255, 254, 246)',
      },
    },
  },
  plugins: [],
}

