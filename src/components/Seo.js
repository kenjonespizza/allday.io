import React from 'react'
import {Helmet} from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

const Seo = (props) => {
  const {title, description, keywords, image, author, type, index, url, context, follow} = props

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        // URL configuration
        var baseUrl = data.site.globalSeo.baseUrl // Get base url
        var tempUrl = ''

        if (url) {
          tempUrl = url
        } else if (context.slug && context.slug !== '' && context.slug !== '/') {
          tempUrl = `${baseUrl}/${context.slug}`
        } else {
          tempUrl = baseUrl
        }

        // Index/Follow configuration
        var tempIndex = ''
        if (index === null) {
          tempIndex = 'index'
        } else if (index === true) {
          tempIndex = 'index'
        } else if (index === false) {
          tempIndex = 'noindex'
        } else {
          tempIndex = 'index'
        }

        // Index/Follow configuration
        var tempFollow = ''
        if (follow === null) {
          tempFollow = 'follow'
        } else if (follow === true) {
          tempFollow = 'follow'
        } else if (follow === false) {
          tempFollow = 'nofollow'
        } else {
          tempFollow = 'follow'
        }

        const metaDescription = description || data.site.globalSeo.description || ''
        const metaTitle = title || data.site.globalSeo.title || ''
        const metaAuthor = author || ''
        const metaDefaultTitle = data.site.globalSeo.title
        const metaKeywords = keywords || data.site.globalSeo.keywords || ''
        const metaUrl = tempUrl
        const metaLang = data.site.globalSeo.lang
        const metaIndex = tempIndex
        const metaFollow = tempFollow
        const metaImage = ((image && image.asset && image.asset.url) ? image.asset : false) || data.site.globalSeo.image.asset || ''
        const metaType = type || 'website'
        const metaTwitterId = data.site.socialMediaHandle.twitter || ''

        return (

          <Helmet
            htmlAttributes={{metaLang}}
            title={metaTitle}
            // titleTemplate={metaTitle === data.site.globalSeo.titleBase ? '%s' : `%s | ${data.site.globalSeo.titleBase}`}
            defaultTitle={metaDefaultTitle}
            defer={false}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: metaTitle
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'author',
                content: metaAuthor
              },
              {
                property: 'og:type',
                content: metaType
              },
              {
                property: 'og:image',
                content: `${metaImage.url}?w=630`
              },
              {
                name: 'twitter:card',
                content: 'summary'
              },
              {
                name: 'twitter:creator',
                content: metaTwitterId
              },
              {
                name: 'twitter:title',
                content: metaTitle
              },
              {
                name: 'twitter:description',
                content: metaDescription
              },
              {
                name: 'robots',
                content: `${metaIndex}, ${metaFollow}`
                // TODO: update this
              },
              {
                property: 'og:url',
                content: metaUrl
              },
              {
                property: 'viewport',
                content: 'width=device-width, initial-scale=1.0'
              }
            ]
              .concat(
                metaKeywords && keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
            )}
          >
            {/* <meta property='og:url' content='http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html' />
            <meta property='og:type' content='article' />
            <meta property='og:title' content='When Great Minds Don’t Think Alike' />
            <meta property='og:description' content='How much does culture influence creative thinking?' />
            <meta property='og:image' content='http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' /> */}
          </Helmet>
        )
      }}
    />
  )
}

// Seo.defaultProps = {
//   lang: 'en',
//   meta: [],
//   keywords: []
// }

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired
// }

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings {
      globalSeo {
        title
        titleBase
        description
        lang
        baseUrl
        image {
          asset {
            url
          }
        }
      }
      socialMediaHandle {
        twitter
      }
    }
  }
`

export const query = graphql`
  fragment SeoFragment on SanitySeo {
    title
    url
    type
    keywords
    index
    follow
    image {
      asset {
        url
      }
    }
    description
    author
  }
`
