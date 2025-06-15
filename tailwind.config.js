import { tailwindcss } from 'tailwindcss'

export default tailwindcss({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Pixelify Sans', 'sans-serif'],
      },
      colors: {
        'green-200': '#a7f3d0',
      },
    },
  },
  plugins: [],
})
