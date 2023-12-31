/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
],
            
  theme: {
    fontFamily: {
      'concert': ['Concert One', 'sans-serif'],
      'inter': [ 'Inter, sans-serif'],
    },
    textShadow: {
      'custom': ['5.67855px 2.83927px 2.27142px rgba(0, 0, 0, 0.25)'],
    },
    screens: {
      '5xs':'100px',
      '4xs':'200px',
      '3xs':'250px',
      'xxs' : '368px',
      'pio' : '412px',
      'xs' : '597px',
      'sm': '640px',
      'md': '768px',
      'ld':  '800px', 
      '2ld':  '850px',
      '3ld': '961px',
      'lg': '1024px',
      'bo': '1120px',
      'xl': '1280px',
      '2xl': '1536px',   
    },
  
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

