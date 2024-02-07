/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'Open Sans Variable', ...defaultTheme.fontFamily.sans],
        heading: ['Neue-Regrade', 'Gilroy', 'Open Sans Variable', ...defaultTheme.fontFamily.sans],
        humane: ['Humane', 'Gilroy', 'Open Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          DEFAULT: '#1c1c1c',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1c1c1c',
        },
        gray: {
          DEFAULT: '#e3e0d9',
          50: '#f7f6f5',
          100: '#edebe7',
          200: '#e3e0d9',
          300: '#c3bcae',
          400: '#aa9f8d',
          500: '#998a76',
          600: '#8c7c6a',
          700: '#756659',
          800: '#61554b',
          900: '#4f463f',
          950: '#2a2420',
        },
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
