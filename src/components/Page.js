import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import {Wrapper, HeadingBlock} from '../elements'
import {base} from '../utilities/styles'
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

const Page = ({pageProps}) => {
  const {_rawBlocks, blocks, seo} = pageProps.data.page

  return (
    <Layout>

      {seo && <Seo context={pageProps.pageContext} {...seo} />}

      <Wrapper hasGrid theme={base} noSpace>

        {blocks && blocks.blocks && blocks.blocks.map((block, i) => {
          if (typeof block._type !== 'undefined') {
            const name = block._type

            const Component = name.charAt(0).toUpperCase() + name.slice(1)

            var rawData = _rawBlocks.blocks || ''
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
      </Wrapper>

    </Layout>
  )
}

export default Page
