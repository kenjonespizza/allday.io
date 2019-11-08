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
            ...ButtonFragment
          }
          imageLeft {
            alt
            asset {
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageRight {
            alt
            asset {
              fluid(maxWidth: 1600) {
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
            ...ButtonFragment
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
            ...ButtonFragment
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
            ...ButtonFragment
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
          heroImage: image {
            alt
            asset {
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imagePosition
          isDark
        }
        ... on SanityTextBlockWithImage {
          _key
          _type
          textBlockImage: image {
            alt
            asset {
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
            }
          }
          video {
            url
            _type
          }
          imagePosition
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
            ...ButtonFragment
          }
        }
      }
    }
  }
}
`

const PageTemplate = (props) => <Page pageProps={props} />

export default PageTemplate
