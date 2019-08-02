import React from 'react'
import {graphql} from 'gatsby'
import {ThemeProvider} from 'styled-components'

import Layout from '../components/Layout'
import {Heading, H1, H2, H3, H4, H5, H6, Button, Wrapper, HeadingBlock} from '../elements'
import {base, darkPulp, lightWatermelly} from '../utilities/styles'
import HeroHome from '../components/HeroHome'
import ServicesBlock from '../components/ServicesBlock'
import CaseStudiesBlock from '../components/CaseStudiesBlock'
import ReviewsBlock from '../components/ReviewsBlock'

export const query = graphql`
  query PagesTemplateQuery($slug: String!) {
    page: sanityPages(pageInfo: {slug: {current: {eq: $slug}}}) {
      pageInfo {
        slug {
          current
        }
      }
      id
      blocks {
        blocks {
        ... on SanityBanner1 {
          _key
          _type
        }
        ... on SanityHeadingBlock {
          _key
          _type
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
              fluid(maxWidth: 2000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageRight {
            alt
            asset {
              fluid(maxWidth: 2000) {
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
                fluid(maxWidth: 800) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
          }
          heading {
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
          heading {
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
            _id
            name
            slug {
              current
            }
            title
            excerpt
          }
        }
      }
    }
  }
}
`

export default props => {
  const {blocks, pageInfo} = props.data.page

  return (
    <>
      <Layout>

        <Wrapper hasGrid theme={base} noSpace>

          {blocks.blocks && blocks.blocks.map(block => {
            if (typeof block._type !== 'undefined') {
              // console.log('block:', block)
              const name = block._type
              const Component = name.charAt(0).toUpperCase() + name.slice(1)

              switch (Component) {
                case 'HeroHome':
                  return <HeroHome key={block._key} data={block} />
                case 'HeadingBlock':
                  return <HeadingBlock key={block._key} data={block} />
                case 'ServicesBlock':
                  return <ServicesBlock key={block._key} data={block} />
                case 'ReviewsBlock':
                  return <ReviewsBlock key={block._key} data={block} />
                case 'CaseStudiesBlock':
                  return <CaseStudiesBlock key={block._key} data={block} />
                default:
                  return null
              }
              // document.getElementById('root')

              // return (
              //   <Component />
              // )
            }
          })}
          {/* <HeroHome /> */}
          {/* <ServicesBlock /> */}
          {/* <CaseStudiesBlock id='123' /> */}
          {/* <ReviewsBlock /> */}
        </Wrapper>

      </Layout>
    </>
  )
}

// const detailsQuery = graphql`
//   query DefaultSEOQuery {
//     site: sanitySiteSettings(id: {eq: "8dbf3659-1c35-5ffd-acb0-4d87c935c20f"}) {
//       title
//     }
//   }
// `
