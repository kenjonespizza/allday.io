import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Image from 'gatsby-image'

import BlockContent from './BlockContent'
import {Wrapper, H1, SubHeading, YouTubePlayer, Container as TextBlockWithImageContainer, VideoHolder as TextBlockWithImageVideoHolder} from '../elements'
import {base, darkBase, media, mqs} from '../utilities/styles'

const Text = styled.div`
  /* margin-top: ${base.spacings.base}px; */
`

const ThinText = styled.div`
  max-width: 700px;
  text-align: left;
  margin: 0 auto;
`

const VideoHolder = styled(TextBlockWithImageVideoHolder)``

const Container = styled(TextBlockWithImageContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;

  a:not([class^="Button"]) {
    color: ${props => getContrast(props.theme.colors.accent, props.theme.colors.background) > 2 ? props.theme.colors.accent : props.theme.colors.text};
  }

  ${SubHeading} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};
  }
  
  ${H1} {
    grid-column: 1 / span 4;
    grid-row: 2 / span 1;
    font-size: 55px;

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
    grid-column: 1 / span 4;
    grid-row: 3 / span 1;
    /* margin-top: ${base.spacings.base}px; */

    strong {
      /* color: ${props => props.theme.colors.accent}; */
    }

    /* a:not([class^="Button"]) {
      color: ${props => props.theme.colors.accent};
      text-decoration: underline;
    } */
  }
`

const TextBlockImage = styled(Image)``

const FullSpanWrapper = styled(Wrapper)`
  padding-bottom: 0;

  ${TextBlockImage} {
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
  /* justify-content: center;
  flex-direction: column;
  display: flex; */
  display: grid;
  grid-template-columns: 1fr;

  ${media.medium`
    /* flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'}; */
    grid-template-columns: 1fr 1fr;
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
  

  ${TextBlockImage} {
    /* height: 70vh; */
    /* margin-top: 100px; */
    /* ${mqs({
      property: 'margin-top',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })}; */

    ${media.medium`
      min-height: 100%;
      width: 50vw;
      flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'};
    `}
  }

  ${VideoHolder} {

    ${media.medium`
      min-height: 100%;
      width: 50vw;
      flex-direction: ${props => props.imagePosition === 'left' ? 'row-reverse' : 'row'};
      background: black;
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
  
  ${VideoHolder} {
    /* margin-top: 100px; */
    width: 100%;
    height: auto;
    
    ${mqs({
      property: 'margin-top',
      valueBase: `${base.spacings.base}px`,
      valueM: `${base.spacings.sectionS}px`
    })};
  }
`

const TextBlockWithImage = ({data, rawData, children}) => {
  if (typeof data !== 'undefined') {
    const {isDark, textBlockImage, imagePosition, video} = data
    const {text} = rawData

    const hasImage = !!((textBlockImage && textBlockImage.asset && textBlockImage.asset.fluid))
    const hasVideo = !!((video && video.url))

    // If hero has image
    if (hasImage || hasVideo) {
      // if layout is 'fullSpan'
      if (imagePosition === 'fullSpan') {
        return (
          <>
            <FullSpanWrapper hasGrid theme={isDark ? darkBase : base}>
              <Container>
                {text &&
                  <Text>
                    <BlockContent blocks={text || []} />
                  </Text>}
              </Container>
              {hasImage && !hasVideo && (
                <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
              )}
              {hasVideo && hasImage && (
                <VideoHolder video={video}>
                  <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                </VideoHolder>
              )}
              {hasVideo && !hasImage && (
                <VideoHolder video={video} />
              )}
            </FullSpanWrapper>
          </>
        )
      } else if (imagePosition === 'left' || imagePosition === 'right') {
        return (
          <>
            <LeftRightSpanWrapper imagePosition={imagePosition} hasGrid theme={isDark ? darkBase : base}>
              {imagePosition === 'left' && (
                <>
                  {hasImage && !hasVideo && (
                    <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                  )}
                  {hasVideo && hasImage && (
                    <VideoHolder video={video}>
                      <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                    </VideoHolder>
                  )}
                </>
              )}
              <Container>
                <div>
                  {text &&
                    <Text>
                      <BlockContent blocks={text || []} />
                    </Text>}
                </div>
              </Container>
              {imagePosition === 'right' && (
                <>
                  {hasImage && !hasVideo && (
                    <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                  )}
                  {hasVideo && hasImage && (
                    <VideoHolder video={video}>
                      <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                    </VideoHolder>
                  )}
                </>
              )}
            </LeftRightSpanWrapper>
          </>
        )
      } else {
        return (
          <CenterWrapper hasGrid theme={isDark ? darkBase : base}>
            <Container>
              <div className='text'>
                {text &&
                  <Text>
                    <BlockContent blocks={text || []} />
                  </Text>}
              </div>
              {hasImage && !hasVideo && (
                <TextBlockImage fluid={{...textBlockImage.asset.fluid, aspectRatio: 16 / 9}} alt={textBlockImage.alt} />
              )}
              {hasVideo && hasImage && (
                <VideoHolder video={video}>
                  <TextBlockImage fluid={{...textBlockImage.asset.fluid}} alt={textBlockImage.alt} />
                </VideoHolder>
              )}
            </Container>

          </CenterWrapper>
        )
      }
    } else {
      return (
        <Wrapper hasGrid noSpaceTop theme={isDark ? darkBase : base}>
          <Container>
            {text &&
              <ThinText>
                <BlockContent blocks={text || []} />
              </ThinText>}

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

export default TextBlockWithImage

export const query = graphql`
  fragment TextBlockWithImageFragment on SanityTextBlockWithImage {
    _key
    _type
    textBlockImage: image {
      alt
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
    video {
      url
      _type
    }
    imagePosition
    isDark
  }
`
