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

export const query = graphql`
  query SAMPLE_PAGE_QUERY($slug: String!) {
    page: sanityCaseStudies(pageInfo: {slug: {current: {eq: $slug}}}) {
    pageInfo {
      pageName
      slug {
        current
      }
    }
    blocks {
      blocks: serviceBlocks {
        heading
        _type
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
  console.log('props:', props)
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
                  console.log('HEADING BLOCK')
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
        </Wrapper>

      </Layout>
    </>
  )
}
