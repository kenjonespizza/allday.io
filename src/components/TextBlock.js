import React from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import {graphql} from 'gatsby'

import {Wrapper, H1, H3, SubHeading, Container as TextBlockQuartersContainer, HeadingBlock} from '../elements'
import {base, darkBase} from '../utilities/styles'
import BlockContent from './BlockContent'

const Container = styled(TextBlockQuartersContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  & > h1, 
  & > h2, 
  & > h3, 
  & > h4, 
  & > h5, 
  & > h6 {
    /* grid-column: 1 / span 1; */
    color: ${props => props.theme.colors.text};

    margin-top: 0;
  }
  
  & > div {

    /* p:first-of-type {
      margin-top: 0;
    } */
  }

  /* strong {
    color: ${props => props.theme.colors.accent};
  } */
`

const Text = styled.div``

const TextBlock = ({data, rawData}) => {
  console.log('rawData:', rawData)
  console.log('data:', data)
  const {headingBlock, isDark} = data
  const {text} = rawData

  return (
    <Wrapper hasGrid theme={isDark ? darkBase : base}>
      <Container>
        {headingBlock && (headingBlock.heading || headingBlock.subHeading) && <HeadingBlock {...headingBlock} />}
        {text &&
          <Text>
            <BlockContent blocks={text || []} />
          </Text>}
      </Container>
    </Wrapper>
  )
}

export default TextBlock

export const TextBlockFragment = graphql`
  fragment TextBlockFragment on SanityTextBlock {
    _key
    _type
    headingBlock {
      ...HeadingBlockFragment
    }
    isDark
  }
`
