module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '400':'400px',
        '500':'500px',
        '550':'550px',
        '600':'600px',
        '650':'650px',
        '700':'700px',
        '750':'750px',
        '800':'800px',
        '820':'820px',
        '900':'900px',
        '1000':'1000px',
        '1100':'1100px',
        '1200':'1200px',
        '1300':'1300px'
      },
      height:{
        '370':'370px',
        '400':'400px',
        '420':'420px',
        '500':'500px',
        '600':'600px',
        '700':'700px',
        '800':'800px',
        '900':'900px',
        '950':'950px',
        '1000':'1000px',
        '1100':'1100px',
      },
      margin: {
        '530': '530px',
       },
      color:{
        'blue-40':'#E9FCFE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
