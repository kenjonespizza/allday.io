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
    blocks {
      blocks: serviceBlocks {
        heading
        _type
        _key
        subHeading

        text {
          list
          style
        }
      }
    }
  }
}
`

export default props => {
  const {blocks, pageInfo, color} = props.data.page

  const brandBase = {
    ...base, // copy everything from base
    colors: {// override the colors property
      ...base.colors, // copy the everything from base.colors
      accent: color.hex // override base.colors.accent
    }
  }

  return (
    <>
      <Layout>

        <Wrapper hasGrid theme={brandBase} noSpace>

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
                case 'HeroBasic':
                  return <HeroBasic key={block._key} data={block} />
                default:
                  return null
              }
            }
          })}
          <TwoPanelText />
          <TextBlock1 />
          <Gallery1 />
        </Wrapper>

      </Layout>
    </>
  )
}
