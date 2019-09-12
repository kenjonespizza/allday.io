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
import HeroBasic from '../components/HeroBasic'
import TwoPanelText from '../components/TwoPanelText'
import TextBlock1 from '../components/TextBlock1'
import Gallery1 from '../components/Gallery1'
import CaseStudiesRow from '../components/CaseStudiesRow'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

export const query = graphql`
  query PagesTemplateQuery($slug: String!) {

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
      }
    }
  }
}
`

export default (props) => {
  const {_rawBlocks, pageInfo, blocks, seo} = props.data.page

  return (
    <>
      <Layout>

        {seo ? <Seo context={props.pageContext} {...seo} /> : <h1>NO SEO</h1>}
        {/* <Seo context={props.pageContext} {...seo} /> */}

        <Wrapper hasGrid theme={base} noSpace>

          {pageInfo.slug.current === 'get-in-touch' && <ContactForm />}

          {blocks && blocks.blocks && blocks.blocks.map((block, i) => {
            if (typeof block._type !== 'undefined') {
              const name = block._type

              const Component = name.charAt(0).toUpperCase() + name.slice(1)

              var rawData = _rawBlocks.blocks
              rawData = rawData[Object.keys(rawData)[i]]

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
                case 'HeroBasic':
                  return <HeroBasic key={block._key} data={block} rawData={rawData} />
                case 'Gallery':
                  return <Gallery1 key={block._key} data={block} />
                case 'TwoPanelText':
                  return <TwoPanelText key={block._key} data={block} rawData={rawData} />
                case 'TextBlock1':
                  return <TextBlock1 key={block._key} data={block} rawData={rawData} />
                case 'CaseStudiesRow':
                  console.log('block:', block)
                  return <CaseStudiesRow key={block._key} data={block} rawData={rawData} />
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
