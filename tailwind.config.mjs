/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script Variable', 'cursive'],
        'quicksand': ['Quicksand Variable', 'sans-serif'],
      },
      colors: {
        accent: '#DD8B92',
        background: '#030303',
      }
    }
  },
  plugins: []
}
