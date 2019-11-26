import React from 'react'
import {graphql} from 'gatsby'
import styled, {ThemeProvider} from 'styled-components'

import {getContrastTextColor} from '../utilities/helpers'
import Layout from '../components/Layout'
import {Wrapper, HeadingBlock, SubHeading, H1} from '../elements'
import {base, darkBase} from '../utilities/styles'
import HeroHome from '../components/HeroHome'
import ServicesBlock from '../components/ServicesBlock'
import CaseStudiesBlockRows from '../components/CaseStudiesBlockRows'
import CaseStudiesBlockBlocks from '../components/CaseStudiesBlockBlocks'
import ReviewsBlock from '../components/ReviewsBlock'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import HeroBasic from '../components/HeroBasic'
import TwoPanelText from '../components/TwoPanelText'
import TextBlock from '../components/TextBlock'
import TextBlockQuarters from '../components/TextBlockQuarters'
import TextBlockWithImage from '../components/TextBlockWithImage'
import Gallery from '../components/Gallery'
// import CaseStudiesRow from '../components/CaseStudiesRow'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import ButtonsBlock from '../components/ButtonsBlock'
import LogoGrid from '../components/LogoGrid'
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
      title
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
      color {
        hex
      }
      _rawBlocks(resolveReferences: {maxDepth: 10})
      _rawSummary(resolveReferences: {maxDepth: 10})
      blocks {
        ...BlocksFragment
      }
    }
  }
`

const ColorWrap = styled.div`
/* display: none; */

*::selection {
  background: ${props => props.color} !important; /* WebKit/Blink Browsers */
  color: ${props => props.textColor} !important; /* WebKit/Blink Browsers */
}
*::-moz-selection {
  background: ${props => props.color} !important; /* Gecko Browsers */
  color: ${props => props.textColor} !important; /* Gecko Browsers */
}
`

export default props => {
  const {_rawBlocks, color, blocks, seo} = props.data.page

  const textColor = getContrastTextColor(color.hex)

  if (props.pageContext.next) {
    var next = {
      title: props.pageContext.next.pageInfo.pageName,
      path: `/work-samples/${props.pageContext.next.pageInfo.slug.current}`,
      color: props.pageContext.next.color.hex,
      text: 'Next Project'
    }
  }

  if (props.pageContext.previous) {
    var previous = {
      title: props.pageContext.previous.pageInfo.pageName,
      path: `/work-samples/${props.pageContext.previous.pageInfo.slug.current}`,
      color: props.pageContext.previous.color.hex,
      text: 'Previous Project'
    }
  }

  if (color && color.hex) {
    var brandBase = {
      ...base, // copy everything from base
      colors: {// override the colors property
        ...base.colors, // copy the everything from base.colors
        accent: color.hex, // override base.colors.accent
        useSpecial: true
      }
    }
    var brandBaseDark = {
      ...darkBase, // copy everything from base
      colors: {// override the colors property
        ...base.colors, // copy the everything from base.colors
        accent: color.hex, // override base.colors.accent
        background: color.hex, // override base.colors.accent
        useSpecial: true
      }
    }
  }

  return (
    <>
      <Layout>

        {/* {seo && <Seo context={props.pageContext} {...seo} />} */}
        {seo && <Seo context={props.pageContext} {...seo} />}

        <Wrapper hasGrid theme={base} noSpace>
          <ColorWrap color={color.hex} textColor={textColor}>
            <ThemeProvider theme={typeof brandBase !== 'undefined' ? brandBase : base}>

              {blocks && blocks.blocks && blocks.blocks.map((block, i) => {
                if (typeof block._type !== 'undefined') {
                  const name = block._type
                  const Component = name.charAt(0).toUpperCase() + name.slice(1)

                  var rawData = _rawBlocks.blocks
                  rawData = rawData[Object.keys(rawData)[i]]

                  switch (Component) {
                    case 'HeroHome':
                      return <HeroHome key={block._key} data={block} />
                    // case 'HeadingBlock':
                    //   return <HeadingBlock key={block._key} data={block} />
                    case 'ServicesBlock':
                      return <ServicesBlock key={block._key} data={block} />
                    case 'ReviewsBlock':
                      return <ReviewsBlock key={block._key} data={block} />
                    case 'CaseStudiesBlock':
                      if (block.layout === 'row') {
                        return <CaseStudiesBlockRows key={block._key} data={block} rawData={rawData} />
                      } else {
                        return <CaseStudiesBlockBlocks key={block._key} data={block} rawData={rawData} />
                      }
                    case 'Banner1':
                      return <Banner1 key={block._key} data={block} />
                    case 'Banner2':
                      return <Banner2 key={block._key} data={block} />
                    case 'HeroBasic':
                      return <HeroBasic key={block._key} data={block} rawData={rawData} />
                    case 'Gallery':
                      return <Gallery key={block._key} data={block} rawData={rawData} />
                    case 'TwoPanelText':
                      return <TwoPanelText key={block._key} data={block} rawData={rawData} />
                    case 'TextBlockQuarters':
                      return <TextBlockQuarters key={block._key} data={block} rawData={rawData} />
                    case 'TextBlockWithImage':
                      return <TextBlockWithImage key={block._key} data={block} rawData={rawData} />
                    case 'TextBlock':
                      return <TextBlock key={block._key} data={block} rawData={rawData} />
                    // case 'CaseStudiesRow':
                    //   return <CaseStudiesRow key={block._key} data={block} rawData={rawData} />
                    case 'FormContact':
                      return <ContactForm key={block._key} data={block} rawData={rawData} />
                    case 'ButtonsBlock':
                      return <ButtonsBlock key={block._key} data={block} />
                    case 'LogoGrid':
                      return <LogoGrid key={block._key} data={block} rawData={rawData} />
                    default:
                      return null
                  }
                }
              })}
              <Pagination next={next} previous={previous} />
            </ThemeProvider>
          </ColorWrap>
        </Wrapper>

      </Layout>
    </>
  )
}
