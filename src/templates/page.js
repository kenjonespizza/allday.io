import React from 'react'
import {graphql} from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query ($slug: String!) {

    page: sanityPages(pageInfo: {slug: {current: {eq: $slug}}}) {
      pageInfo {
        slug {
          current
        }
      }
      id
      _rawBlocks(resolveReferences: {maxDepth: 10})
      seo {
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
      blocks {
        blocks {
        ... on SanityBanner1 {
          ...Banner1
        }
        ... on SanityHeroHome {
          _key
          _type
          mainText
          button {
            text
            icon
            url
            slug {
              current
            }
          }
          imageLeft {
            alt
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageRight {
            alt
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        ... on SanityServicesBlock {
          _key
          _type
          services {
            _id
            name
            sampleImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
          }
          headingBlock {
            heading
            subHeading
          }
          button {
            text
            icon
            url
            slug {
              current
            }
          }
        }
        ... on SanityReviewsBlock {
          _key
          _type
          reviews {
            company
            quote
            reviewer
            _key
          }
          button {
            icon
            text
            slug {
              current
            }
            url
          }
        }
        ... on SanityCaseStudiesBlock {
          _key
          _type
          headingBlock {
            heading
            subHeading
          }
          button {
            icon
            slug {
              current
            }
            text
            url
          }
          caseStudies {
            pageInfo {
              slug {
                current
              }
              pageName
            }
            title
            excerpt
            _id
          }
        }
        ... on SanityHeroBasic {
          _key
          _type
          heading
          subHeading
          isDark
        }
        ... on SanityGallery {
          _key
          _type
          image {
            caption
            alt
            asset {
              _id
              url
            }
          }
        }
        ... on SanityTwoPanelText {
          _key
          _type
          isDark
          headingBlock {
            heading
            subHeading
          }
        }
        ... on SanityTextBlock1 {
          _key
          _type
          heading
          isDark
        }
        ... on SanityCaseStudiesRow {
          _key
          _type
          caseStudies {
            color {
              hex
            }
            title
            excerpt
            _id
            pageInfo {
              slug {
                current
              }
              pageName
            }
          }
        }
        ... on SanityFormContact {
          _key
          _type
          redirectLocation {
            current
          }
          text
        }
        ... on SanityButtonsBlock {
          _key
          _type
          isDark
          headingBlock {
            heading
            subHeading
          }
          buttons {
            _key
            url
            text
            color
            isGhost
            slug {
              current
            }
            icon
          }
        }
      }
    }
  }
}
`

const PageTemplate = (props) => <Page pageProps={props} />

export default PageTemplate
