/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        turkuaz: '#0288D1',
        mavi: '#0D619A',
        vizon: '#B7A78F',
        turuncu: '#E7A54E',
        lacivert: {
          DEFAULT: '#03253A',
          light: '#0a3a55',
        },
        body: '#4D4D4D',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
