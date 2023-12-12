/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: '#ee7711',
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce1ac',
          300: '#faca77',
          400: '#f7a840',
          500: '#f58e1a',
          550: '#f28316',
          600: '#ee7711',
          650: '#D66811',
          700: '#be5810',
          800: '#974415',
          900: '#7a3a14',
          950: '#421c08',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
