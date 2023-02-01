const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  mode:"jit",
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(171, 100%, 41%)', //#00d1b2
          light: 'hsl(171, 100%, 96%)',
          hover: '#00c4a7',
          dark: 'hsl(171, 100%, 29%)', //#00947e
          '50': '#defffa',
          '100': '#B7FFF4',
          '200': '#8AFFEE',
          '300': '#5CFFE7',
          '400': '#2EFFE0',
          '500': '#00FFD9',
          '600': '#00D1B2',
          '700': '#009982',
          '800': '#006152',
          '900': '#002923'
        },
        link: {
          DEFAULT: 'hsl(217, 71%, 53%)', //#3273dc
          light: 'hsl(219, 70%, 96%)', //#eef3fc
          dark: 'hsl(217, 71%, 45%)',
          hover:'#3e56c4',
          '50': '#CFDEF7',
          '100': '#BDD2F4',
          '200': '#9BBAEE',
          '300': '#78A3E8',
          '400': '#558BE2',
          '500': '#3273DC',
          '600': '#205BBB',
          '700': '#184690',
          '800': '#113164',
          '900': '#0A1C38'
        },
        black: {
          DEFAULT: '#0a0a0a',
          bis: 'hsl(0, 0%, 7%)',
          ter: 'hsl(0, 0%, 14%)',
          hover: '#040404',
          focus: 'rgba(10, 10, 10, 0.25)'
        },
        gray: {
          DEFAULT: 'hsl(0, 0%, 48%)',
          light: 'hsl(0, 0%, 71%)',
          lighter: 'hsl(0, 0%, 86%)',
          dark: 'hsl(0, 0%, 29%)',
          darker: 'hsl(0, 0%, 21%)'
        },
        light: {
          DEFAULT: 'hsl(0, 0%, 96%)',
          hover: '#eeeeee',
          active: '#e8e8e8'
        },
        success : {
          DEFAULT: 'hsl(141, 71%, 48%)',
          light: 'hsl(142, 52%, 96%)',
          dark: 'hsl(141, 53%, 31%)',
          hover:'#3ec487',
          active:'#3abb81',
          '50': '#e6f7ef'
        },
        warning : {
          DEFAULT: 'hsl(48, 100%, 67%)',
          light: 'hsl(48, 100%, 96%)',
          dark: 'hsl(48, 100%, 29%)',
          hover:'#ffdc7d',
          active:'#ffd970',
          '50':'#fff6de'
        },
        danger: {
          DEFAULT: 'hsl(348, 100%, 61%)',
          light: 'hsl(347, 90%, 96%)',
          dark: 'hsl(348, 86%, 43%)',
          hover: '#f03a5f',
          active: '#ef2e55',
          '50': '#FEECF0'
        },
        info: {
          DEFAULT: 'hsl(204, 86%, 53%)',
          light: 'hsl(206, 70%, 96%)',
          dark: 'hsl(204, 71%, 39%)',
          hover:'#3488ce',
          active:'#3082c5',
          '50': '#e4eff9'
        },
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          ter: 'hsl(0, 0%, 96%)',
          bis: 'hsl(0, 0%, 98%)',
          hover: '#f9f9f9',
          active: '#f2f2f2'
        },
        dark: {
          DEFAULT: '#363636',
          hover: '#2f2f2f',
          focus: 'rgba(54, 54, 54, 0.25)',
          active: '#292929'
        },
        text: {
          ghost: '#485fc7',
          hover: '#f5f5f5'
        }
        
      },
      spacing: {
        '1.7': '0.4375rem',
      },
      height: {
        '15': '3.75rem',
      }
    },
  },
  variants: {
    extend: {
      ringColor:['focus'],
      borderColor:['focus','checked'],
      backgroundColor:['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};