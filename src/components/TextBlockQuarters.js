import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'

import {Wrapper, H1, H2, H3, SubHeading, Container as TextBlockQuartersContainer} from '../elements'
import {base, darkBase, media} from '../utilities/styles'
import BlockContent from './BlockContent'

const Container = styled(TextBlockQuartersContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(${base.spacings.base}px / 2);

  ${media.medium`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: ${base.spacings.base}px;
  `}
  
  ${media.large`
    grid-gap: ${base.spacings.base}px;
  `}

  & > h1, 
  & > h2, 
  & > h3, 
  & > h4, 
  & > h5, 
  & > h6 {
    grid-column: 1 / span 1;
    color: ${props => props.theme.colors.text};
    margin: 0;
  }
  
  & > div {
    grid-column: span 1;

    ${media.medium`
      grid-column: 2 / span 3;
    `}

    p:first-of-type {
      margin-top: 0;
    }
  }

  /* strong {
    color: ${props => props.theme.colors.accent};
  } */
`

const Text = styled.div`
  ul, li {
    padding: 0;
    margin: 0;
    margin-left: 5px;
  }
`

const TextBlockQuarters = (props) => {
  const {data, rawData} = props
  const {heading, isDark} = data
  const {text} = rawData

  return (
    <Wrapper hasGrid theme={isDark ? darkBase : base}>
      <Container>
        <H3 as='h2'>{heading || ''}</H3>
        {text &&
          <Text>
            <BlockContent blocks={text || []} />
          </Text>}
      </Container>
    </Wrapper>
  )
}

export default TextBlockQuarters

export const query = graphql`
  fragment TextBlockQuartersFragment on SanityTextBlockQuarters {
    _key
    _type
    heading
    isDark
  }
`
