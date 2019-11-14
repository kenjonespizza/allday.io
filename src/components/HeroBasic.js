import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Image from 'gatsby-image'

import BlockContent from './BlockContent'
import {Wrapper, H1, SubHeading, Container as HeroBasicContainer} from '../elements'
import {base, darkBase, media, mqs} from '../utilities/styles'

const Text = styled.div`
  margin-top: ${base.spacings.base}px;
`

const Container = styled(HeroBasicContainer)`
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
    margin-top: 0;

    ${mqs({
      property: 'font-size',
      valueBase: '45px',
      valueM: '50px',
      valueL: '60px',
      valueXL: '70px'
    })};
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

const FullSpanWrapper = styled(Wrapper)`
  padding-bottom: 0;

  ${HeroImage} {
    height: 80vh;
    /* margin-top: 100px; */
    ${mqs({
      property: 'margin-top',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })};
  }
`

const LeftRightSpanWrapper = styled(Wrapper)`
  padding: 0;
  justify-content: center;
  flex-direction: column;
  display: flex;

  ${media.medium`
    flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'};
  `}

  ${Container} {
    /* max-width: 600px; */
    margin: 0;
    display: flex;
    align-items: center;

    ${media.medium`
      width: 50vw;
      /* flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'}; */
      justify-content: ${props => props.imagePosition === 'left' ? 'flex-start' : 'flex-end'};
    `}

    ${mqs({
      property: 'padding',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })};

    > div {
      max-width: ${600 - (base.spacings.base * 2)}px;
      display: flex;
      flex-direction: column;
    }
  }
  

  ${HeroImage} {
    /* height: 70vh; */
    min-height: 100%;
    /* margin-top: 100px; */
    /* ${mqs({
      property: 'margin-top',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })}; */

    ${media.medium`
      width: 50vw;
      flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'};
    `}
  }
`

const CenterWrapper = styled(Wrapper)`
  /* padding-bottom: 0; */

  ${Container} {
    grid-template-columns: 1fr;
    
    > div.text {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  
  ${HeroImage} {
    /* margin-top: 100px; */
    width: 100%;
    ${mqs({
      property: 'margin-top',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })};
  }
`

const HeroBasic = ({data, rawData, children}) => {
  if (typeof data !== 'undefined') {
    const {heading, subHeading, isDark, heroImage, imagePosition} = data
    const {text} = rawData

    // If hero has image
    if (heroImage) {
      // if layout is 'fullSpan'
      if (imagePosition === 'fullSpan') {
        return (
          <>
            <FullSpanWrapper hasGrid theme={isDark ? darkBase : base}>
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
              </Container>
              {heroImage && (
                <HeroImage fluid={{...heroImage.asset.fluid}} alt={heroImage.alt} />
              )}
            </FullSpanWrapper>
          </>
        )
      } else if (imagePosition === 'left' || imagePosition === 'right') {
        return (
          <>
            <LeftRightSpanWrapper imagePosition={imagePosition} hasGrid theme={isDark ? darkBase : base}>
              <Container>
                <div>
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
                </div>
              </Container>
              {heroImage && (
                <HeroImage fluid={{...heroImage.asset.fluid}} alt={heroImage.alt} />
              )}
            </LeftRightSpanWrapper>
          </>
        )
      } else if (imagePosition === 'center') {
        return (
          <CenterWrapper hasGrid theme={isDark ? darkBase : base}>
            <Container>
              <div className='text'>
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
              </div>
              {heroImage && (
                <HeroImage fluid={{...heroImage.asset.fluid, aspectRatio: 16 / 9}} alt={heroImage.alt} />
              )}
            </Container>

          </CenterWrapper>
        )
      } else {
        return (
          <Wrapper hasGrid theme={isDark ? darkBase : base}>
            <Container>
              {subHeading && (
                <SubHeading>hiiiii
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

            </Container>
            {heroImage && (
              <HeroImage fluid={heroImage.asset.fluid} alt={heroImage.alt} />
            )}
          </Wrapper>
        )
      }
    } else {
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

          </Container>
        </Wrapper>
      )
    }
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

export default HeroBasic

export const query = graphql`
  fragment HeroBasicFragment on SanityHeroBasic {
    _key
    _type
    heading
    subHeading
    heroImage: image {
      alt
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
    imagePosition
    isDark
  }
`
