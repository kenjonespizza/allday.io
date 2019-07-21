import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import {useGlobalState} from './Layout'
import {getNavHeight} from '../utilities/helpers'
import {centerIt} from '../utilities/styles/helpers'

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
  padding: 70px 30px;
  font-size: 39px;
  text-align: center;
  line-height: 1.39;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
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
          mainText
          videoURL
          buttonText
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
  const {mainText, buttonText, videoURL, imageRight, imageLeft} = data.sanityHomepage.hero

  return (
    <HeroHomeWrapper id='HeroHomeWrapperEl' navHeight={navHeight}>
      <Side>
        <SideImg fluid={imageLeft.asset.fluid} alt={imageLeft.alt} />
      </Side>
      <Side>
        <SideImg fluid={imageRight.asset.fluid} alt={imageRight.alt} />
      </Side>
      <CenteredBox>
        {mainText}
        <button>
          {buttonText}
        </button>
      </CenteredBox>
    </HeroHomeWrapper>
  )
}

export default HeroHome
