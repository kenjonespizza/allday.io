// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'allday-main-site',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AllDay',
        short_name: 'AllDay',
        start_url: '/',
        background_color: '#FEFEFE',
        theme_color: '#00B4BF',
        display: 'standalone',
        icon: 'static/pineapple-man.svg'
      }
    },
    'gatsby-plugin-offline'
  ]
}
