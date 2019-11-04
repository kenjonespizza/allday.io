import React from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Image from 'gatsby-image'

import BlockContent from './BlockContent'
import {Wrapper, H1, SubHeading, Container as HeroWithImageContainer} from '../elements'
import {base, darkBase, media} from '../utilities/styles'

const Text = styled.div``

const Container = styled(HeroWithImageContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;

  ${SubHeading} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};
  }
  
  ${H1} {
    grid-column: 1 / span 3;
    grid-row: 2 / span 1;
    font-size: 55px;

    ${media.medium`
      font-size: 70px;
    `}
  }
  
  /* ${Text} { */
  div[class*="Text"] {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    /* margin-top: ${base.spacings.base}px; */

    strong {
      /* color: ${props => props.theme.colors.accent}; */
    }

    a {
      color: ${props => props.theme.colors.accent};
      text-decoration: underline;
    }
  }
`

const HeroImage = styled(Image)``

const HeroWithImage = ({data, rawData, children}) => {
  if (typeof data !== 'undefined') {
    const {heading, subHeading, isDark, heroImage} = data
    const {text} = rawData

    return (
      <Wrapper hasGrid theme={isDark ? darkBase : base}>
        <Container>
          {subHeading && (
            <SubHeading>
              {subHeading}
            </SubHeading>
          )}
          {heading && (
            <H1>
              {heading}
            </H1>
          )}
          {text &&
            <Text>
              <BlockContent blocks={text || []} />
            </Text>}
          {heroImage && (
            <HeroImage fluid={heroImage.asset.fluid} alt={heroImage.alt} />
          )}
        </Container>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper hasGrid>
        <Container>
          {children}
        </Container>
      </Wrapper>

    )
  }
}

export default HeroWithImage
