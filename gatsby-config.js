// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const path = require('path')

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: { // SiteMeta is only used for blog right now
    title: 'Design Studio Blog | Web | App Development | AllDay Consultants',
    name: 'AllDay',
    siteUrl: 'https://allday.io/',
    description: 'Our design pros talk all things web, app, UX/UI design and strategy tips all day! Visit our blog to create a better brand that connects with your customers.',

    // important to set the main text that appears in the hero
    hero: {
      heading: 'Good sh!t. AllDay.',
      maxWidth: 652
    },
    social: [
      {
        name: 'facebook',
        url: 'https://facebook.com/alldayio'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/alldayio'
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/alldayio'
      },
      {
        name: 'linkedIn',
        url: 'https://linkedin.com/allday'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/posts',
        name: 'content/posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content/authors',
        name: 'content/authors'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300', '300i', '400', '400i', '500', '500i', '600', '600i', '700', '700i']
          }
        ]
      }
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        sources: {
          local: true
        },
        basePath: '/design-studio-blog',
        rootPath: '/',
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        authorsPage: true,
        authorsPath: 'team'
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AllDay',
        short_name: 'AllDay',
        start_url: '/',
        background_color: '#FEFEFE',
        theme_color: '#02161E',
        display: 'standalone',
        icon: 'src/img/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ['/category/*', '/path/to/page'],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({site, allSitePage}) =>
          allSitePage.edges.map(edge => {
            let priority
            let changefreq
            if (edge.node.path === '/') {
              priority = 1
              changefreq = 'monthly'
            } else if (edge.node.path === '/design-studio-blog') {
              priority = 0.5
              changefreq = 'weekly'
            } else {
              priority = 0.5
              changefreq = 'monthly'
            }

            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq,
              priority
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://allday.io',
        sitemap: 'https://allday.io/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-71658366-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com'
      }
    },
    'gatsby-plugin-offline'
  ]
}
