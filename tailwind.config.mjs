/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: '#ff3ea3',
          50: '#fef1f8',
          100: '#fee5f4',
          200: '#ffcaeb',
          300: '#ff9fd8',
          400: '#ff63bc',
          500: '#ff3ea3',
          600: '#f0127c',
          700: '#d10560',
          800: '#ad074f',
          900: '#8f0c45',
          950: '#580025',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
