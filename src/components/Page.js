import React from 'react'
import styled from 'styled-components'

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
import TextBlockWithImage from '../components/TextBlockWithImage'
import Gallery1 from '../components/Gallery1'
import CaseStudiesRow from '../components/CaseStudiesRow'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import ButtonsBlock from '../components/ButtonsBlock'

const Page = ({pageProps}) => {
  console.log('pageProps:', pageProps)
  const {_rawBlocks, blocks, seo} = pageProps.data.page
  console.log('seo:', seo)
  return (
    <Layout>

      {seo && <Seo context={pageProps.pageContext} {...seo} />}

      <Wrapper hasGrid theme={base} noSpace>

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
              case 'TextBlockWithImage':
                return <TextBlockWithImage key={block._key} data={block} rawData={rawData} />
              case 'CaseStudiesRow':
                return <CaseStudiesRow key={block._key} data={block} rawData={rawData} />
              case 'FormContact':
                return <ContactForm key={block._key} data={block} rawData={rawData} />
              case 'ButtonsBlock':
                return <ButtonsBlock key={block._key} data={block} />
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
