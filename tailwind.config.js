module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#C49C56',
        secondary: '#E5E5E5',
        'primary-alt': '#d1a66d',
        'semi-75': 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    options: {
      safelist: [
        'sm:col-span-1',
        'sm:col-span-2',
        'sm:col-span-3',
        'sm:row-span-1',
        'sm:row-span-2',
        'sm:row-span-3',
      ],
    },
  },
}
