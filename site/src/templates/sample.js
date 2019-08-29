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
import Pagination from '../components/Pagination'

export const query = graphql`
  query SAMPLE_PAGE_QUERY($slug: String!) {
    page: sanityCaseStudies(pageInfo: {slug: {current: {eq: $slug}}}) {
    pageInfo {
      pageName
      slug {
        current
      }
    }
    color {
      hex
    }
    _rawBlocks(resolveReferences: {maxDepth: 10})
    blocks {
      blocks: caseStudiesBlocks {
        ... on SanityHeroBasic {
          _key
          _type
          heading
          subHeading
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
        }
      }
    }
  }
}
`

export default props => {
  const {_rawBlocks, pageInfo, color, blocks} = props.data.page
  console.log('color:', color)

  if (color && color.hex) {
    var brandBase = {
      ...base, // copy everything from base
      colors: {// override the colors property
        ...base.colors, // copy the everything from base.colors
        accent: color.hex // override base.colors.accent
      }
    }
    // return brandBase
  }

  return (
    <>
      <Layout>

        <Wrapper hasGrid theme={typeof brandBase !== 'undefined' ? brandBase : base} noSpace>

          {blocks && blocks.blocks && blocks.blocks.map((block, i) => {
            if (typeof block._type !== 'undefined') {
              const name = block._type
              const Component = name.charAt(0).toUpperCase() + name.slice(1)

              var rawData = _rawBlocks.caseStudiesBlocks
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
                default:
                  return null
              }
            }
          })}
          {/* <TwoPanelText /> */}
          {/* <TextBlock1 /> */}
          {/* <Gallery1 /> */}
          {/* <TextBlock1 /> */}
          {/* <Gallery1 /> */}
          <Pagination />
        </Wrapper>

      </Layout>
    </>
  )
}
