module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        iopurple : {
          DEFAULT: '#974EFF',
          light: '#A468FF',
          dark: '#4839FF',
        },
        gray : {
          50: '#f5f5f7',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}