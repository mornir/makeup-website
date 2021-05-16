module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#C49C56',
        secondary: '#E5E5E5',
        'primary-alt': '#d1a66d',
        'semi-75': 'rgba(0, 0, 0, 0.75)',
      },
      height: {
        mobile: '93vh',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    options: {
      safelist: [
        'col-span-1',
        'col-span-2',
        'col-span-3',
        'row-span-1',
        'row-span-2',
        'row-span-3',
      ],
    },
  },
}
