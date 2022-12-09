const tailwindcss = require('tailwindcss')

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}