/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6d65c8',
        secondary:'#5a63c7',
        'font-primary': '#FB8F48',
        'font-secondary': '#FFFFFF',
        'text-input': '#654B8B'
      },
      fontFamily: {
        sans: ['PixelSplitter', 'DynaPuff', 'system-ui', 'sans-serif'],
        dynapuff: ['DynaPuff', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};