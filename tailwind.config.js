module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#0D0A19',
      orange: '#EF8354',
      purple: '#7963F0',
      'purple-dark': '#5B4AB4',
      pink: '#FBB0BF',
      mint: '#A2F3D9',
      'gray-black': '#9A9EA7',
      'gray-white': '#F5F6F7',
      'gray-light': '#E4E6E8',
      'gray-medium': '#C8CCD4',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        'smh': '870px',
      },
      dropShadow: {
        '1xl': '0 3px 4px rgba(153, 155, 168, 0.15)',
      },
      borderRadius: {
        '1xl': '0.625rem',
      },
      fontSize: {
        '1xl': '1.375rem',
      },
    },
  },
  plugins: [],
};
