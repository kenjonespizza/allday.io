import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'
import {readableColor} from 'polished'

import PineappleDudeFile from '../../static/pineapple-man.svg'
import {useGlobalState} from './Layout'
import {getNavHeight} from '../utilities/helpers'
import {centerIt, lightPulp, lightWatermelly, base} from '../utilities/styles/'
import {Button, Wrapper} from '../elements/'

const HeroHomeWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  /* height: calc(100vh - (${props => props.navHeight}px) * 2); */
  height: calc(100vh - ${props => props.navHeight}px);
  position: relative;
`

const Side = styled.figure`
  height: 100%;
  width: calc(50vw - 10px);
  background-color: ${props => props.theme.colors.seal};
  margin: 0;
`

const SideImg = styled(Img)`
  width: 100%;
  height: 100%;
`

const CenteredBox = styled.div`
  ${centerIt};
  width: 75%;
  max-width: 466px;
  background: ${props => props.theme.colors.white};
  padding: 70px ${base.spacings.base}px ${base.spacings.base}px;
  font-size: 39px;
  text-align: center;
  line-height: 1.39;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;

  button {
    margin-top: ${base.spacings.base}px;
  }
`

const PineappleDude = styled(PineappleDudeFile)`
  position: absolute;
  bottom: calc(100% - 60px);
  left: 50%;
  transform: translate(-50%, 0%);
`

const HeroHome = () => {
  const [navHeight, setNavHeight] = useGlobalState('navHeight')

  useEffect(() => {
    setNavHeight(getNavHeight())
  })

  const data = useStaticQuery(graphql`
    query HERO_QUERY {
      sanityHomepage {
        hero {
          button {
            buttonIcon
            buttonText
            slug {
              current
            }
            url
          }
          mainText
          imageRight {
            alt
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageLeft {
            alt
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log('data:', data)
  const {mainText, button, imageRight, imageLeft} = data.sanityHomepage.hero

  return (<Wrapper noSpace theme={lightPulp}>
    <HeroHomeWrapper id='HeroHomeWrapperEl' navHeight={navHeight}>
      <Side>
        <SideImg fluid={imageLeft.asset.fluid} alt={imageLeft.alt} />
      </Side>
      <Side>
        <SideImg fluid={imageRight.asset.fluid} alt={imageRight.alt} />
      </Side>

      <CenteredBox>
        <PineappleDude />
        {mainText}
        <Button type='button' icon={button.buttonIcon}>
          {button.buttonText}
        </Button>
      </CenteredBox>
    </HeroHomeWrapper>
  </Wrapper>
  )
}

export default HeroHome
