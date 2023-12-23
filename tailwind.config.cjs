/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts}',
    './vueform.config.js',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require('@vueform/vueform/tailwind'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
}
