/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 6px rgb(0 0 0 / 16%)',
        '4xl': '0px -6px 6px rgb(0 0 0 / 16%)',
        '5xl' : '0px 8px 6px rgb(0 0 0 / 16%)'
      },
      colors:{
        first:"rgb(85, 231, 72)",
        second:"#A70000",
        fontColor:{
          1:'#AF8888',
          2:"#000",
          3:"#fff",
          4:"#707070"
        }
  
      },
      screens: {
        '3xl': '2400px',
        'xs':"400px"
      },
    },
  },
  plugins: [],
}
