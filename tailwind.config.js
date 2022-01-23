module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#073b4c',
        secondary: '#fefae0',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: '0px 0.5rem',
          '@screen xs': {
            maxWidth: 'auto',
            margin: '0px auto',
          },
          '@screen sm': {
            maxWidth: '462px',
            margin: '0px auto',
          },

          '@screen smd': {
            maxWidth: '462px',
            margin: '0px auto',
          },
          '@screen md': {
            maxWidth: '750px',
            margin: '0px auto',
            padding: '0px auto',
          },
          '@screen lg': {
            maxWidth: '970px',
            margin: '0px auto',
          },
          '@screen xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 2xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },

          '@screen 3xl': {
            maxWidth: '1170px',
            margin: '0px auto',
          },
        },
      });
    },
  ],
};
