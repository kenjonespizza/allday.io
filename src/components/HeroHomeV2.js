import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'
import {readableColor} from 'polished'
import Typical from 'react-typical'

import {useGlobalState} from './Layout'
import {centerIt, lightPulp, base, transition} from '../utilities/styles/'
import {Button, Wrapper, GridLines} from '../elements/'

const HeroWrapper = styled(Wrapper)`
  style
`

const Split = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-gap: ${base.spacings.base}px; */
  height: calc(100vh - 94px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroImage = styled(Img)`
`

const HeroText = styled.main`
  padding: 0 70px;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  grid-gap: 60px;
  justify-items: start;
`

const HeroTextInner = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  max-width: ${600 - (base.spacings.base * 2)}px;

  .big {
    font-size: 80px;
    font-weight: ${base.fontWeights.bold};
    line-height: 100%;
  }
  .medium {
    font-size: 50px;
    font-weight: ${base.fontWeights.semibold};
    line-height: 100%;
    margin-bottom: 20px;
    font-family: unset;
          /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important; */

    span.emoji {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
  }
  .small, .signature {
    font-size: 26px;
    font-weight: ${base.fontWeights.light};
    line-height: 1.5em;
    /* margin-top: 30px; */
  }
`

const HeroHomeV2 = (props) => {
  const typingDelay = 1000

  return (
    <Wrapper hasGrid noSpace>
      <Split>
        {/* <HeroImage fluid={props.data.imageLeft.asset.fluid} /> */}
        {/* <img src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' alt='' /> */}
        <img src='https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' alt='' />
        <HeroText>
          <HeroTextInner>
            <div className='big'>Dear,</div>
            <div className='medium'>
              <Typical
                steps={[
                  'Small Business 🔥', typingDelay,
                  'Coffeeshop ☕️', typingDelay,
                  'Agency 👨‍💻', typingDelay,
                  'Restaurant 🍕', typingDelay,
                  'Real Estate Agent 🏡', typingDelay,
                  'Brewery 🍺', typingDelay,
                  'Cannabis / CBD 🍀', typingDelay,
                  'Athlete 🤾‍♀️', typingDelay,
                  'Farmer 🚜', typingDelay,
                  'Canada 🇨🇦', typingDelay
                ]}
                loop={Infinity}
                wrapper='div'
              />
            </div>
            <div className='small'>You need a great website, and we can help</div>
            <div className='signature'>-AllDay</div>
          </HeroTextInner>
          <Button color='black'>See How</Button>
        </HeroText>
      </Split>
    </Wrapper>
  )
}

export default HeroHomeV2

export const query = graphql`
  fragment HeroHomeFragment on SanityHeroHome {
    _key
    _type
    mainText
    button {
      ...ButtonFragment
    }
    imageLeft {
      alt
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
    imageRight {
      alt
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`
