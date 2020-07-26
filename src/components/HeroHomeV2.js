import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'
import {readableColor} from 'polished'
import Typical from 'react-typical'

import {centerIt, lightPulp, base, transition, media} from '../utilities/styles/'
import {Button, Wrapper, GridLines} from '../elements/'

const HeroWrapper = styled(Wrapper)`
  
`

const Split = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 94px);
  /* grid-gap: ${base.spacings.base}px; */

  ${media.medium`
    height: calc(100vh - 94px);
    grid-template-columns: 1fr 1fr;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroImage = styled(Img)`
  display: none;

  ${media.medium`
    display: block;
  `}
`

const HeroText = styled.main`
  padding: 0 70px;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  grid-gap: 20px;
  justify-items: center;

  ${media.medium`
    grid-gap: 60px;
    justify-items: start;
  `}
`

const HeroTextInner = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  max-width: ${600 - (base.spacings.base * 2)}px;
  justify-items: center;
  text-align: center;

  ${media.medium`
    justify-items: start;
    text-align: left;
  `}

  .big {
    font-size: 40px;
    font-weight: ${base.fontWeights.bold};
    line-height: 100%;

    ${media.medium`
      font-size: 60px;
    `}
    
    ${media.xLarge`
      font-size: 80px;
    `}
  }
  .medium {
    font-size: 20px;
    font-weight: ${base.fontWeights.semibold};
    line-height: 100%;

    ${media.medium`
      font-size: 30px;
      margin-bottom: 20px;
    `}
    
    ${media.xLarge`
      font-size: 50px;
    `}

    span.emoji {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  }
  .small, .signature {
    font-size: 17px;
    font-weight: ${base.fontWeights.light};
    line-height: 1.5em;


    ${media.medium`
      font-size: 19px;
    `}
    
    ${media.xLarge`
      font-size: 26px;
    `}
  }
`

const HeroHomeV2 = (props) => {
  const typingArray = []
  props.data.rotatingText.map((item, i) => {
    typingArray.push(item)
    typingArray.push(props.data.timeOnSlide)
  })

  return (
    <Wrapper hasGrid noSpace>
      <Split>
        <HeroImage fluid={props.data.imageLeft.asset.fluid} />
        <HeroText>
          <HeroTextInner>
            <div className='big'>{props.data.bigText}</div>
            <div className='medium'>
              <Typical
                steps={typingArray}
                loop={Infinity}
                wrapper='div'
              />
            </div>
            <div className='small'>{props.data.smallText}</div>
            <div className='signature'>-AllDay</div>
          </HeroTextInner>
          <Button {...props.data.button} />
        </HeroText>
      </Split>
    </Wrapper>
  )
}

export default HeroHomeV2

export const query = graphql`
  fragment HeroHomeV2Fragment on SanityHeroHomeV2 {
    _key
    _type
    bigText
    rotatingText
    smallText
    timeOnSlide
    button {
      ...ButtonFragment
    }
    imageLeft {
      alt
      asset {
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`
