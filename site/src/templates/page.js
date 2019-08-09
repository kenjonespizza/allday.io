import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import {Wrapper, HeadingBlock} from '../elements'
import {base} from '../utilities/styles'
import HeroHome from '../components/HeroHome'
import ServicesBlock from '../components/ServicesBlock'
import CaseStudiesBlock from '../components/CaseStudiesBlock'
import ReviewsBlock from '../components/ReviewsBlock'
import Banner1 from '../components/Banner1'

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
          button {
            slug {
              current
            }
            icon
            text
            url
          }
          description
          headingBlock {
            heading
            subHeading
          }
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

          {blocks && blocks.blocks.map(block => {
            if (typeof block._type !== 'undefined') {
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
                case 'Banner1':
                  return <Banner1 key={block._key} data={block} />
                default:
                  return null
              }
            }
          })}
        </Wrapper>

      </Layout>
    </>
  )
}
