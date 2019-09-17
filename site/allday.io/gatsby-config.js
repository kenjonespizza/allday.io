// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Blog by AllDay',
    name: 'AllDay',
    siteUrl: 'https://allday.io/blog',
    description: 'AllDay Blog - Tampa & Charleston web design and development services',

    // important to set the main text that appears in the hero
    hero: {
      heading: 'Perspectives on technology, design and business from the team at Narative.',
      maxWidth: 652
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/narative'
      },
      {
        name: 'github',
        url: 'https://github.com/narative'
      }
    ]
  },
  plugins: [
    {
      resolve: 'allday-main-site',
      options: {}
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        sources: {
          local: true
        },
        authorsPage: true,
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: 'blog/'
      }
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
