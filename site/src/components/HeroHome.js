import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'
import {readableColor} from 'polished'

import PineappleDudeFile from '../../static/pineapple-man.svg'
import {useGlobalState} from './Layout'
import {centerIt, lightPulp, lightWatermelly, base, transition} from '../utilities/styles/'
import {Button, ButtonStyles, Wrapper, GridLines} from '../elements/'

const HeroHomeWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 124px);
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

const PineappleDudeWrap = styled.div`
  position: absolute;
  bottom: calc(100% - 60px);
  left: 50%;
  transform: translate(-50%, 0%);
  transform-origin: center center;
  ${transition({})};
  width: 136px;
  height: 258px; 
`

const CenteredBox = styled.div`
  ${centerIt};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 466px;
  background: ${props => props.theme.colors.white};
  padding: 70px ${base.spacings.base}px ${base.spacings.base}px;
  font-size: 39px;
  text-align: center;
  line-height: 1.39;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
`

const NewButton = styled(Button)``

const HeroButton = styled.a`
  ${ButtonStyles}
  margin-top: ${base.spacings.base}px !important;

  &:hover + div {
    transform: translate(-50%, 0%) rotate(15deg);
  }
`

const HeroHome = (props) => {
  // const data = useStaticQuery(graphql`
  //   query HERO_QUERY {
  //     sanityHomepage {
  //       hero {
  //         button {
  //           buttonIcon
  //           buttonText
  //           slug {
  //             current
  //           }
  //           url
  //         }
  //         mainText
  //         imageRight {
  //           alt
  //           asset {
  //             fluid(maxWidth: 4000) {
  //               ...GatsbySanityImageFluid
  //             }
  //           }
  //         }
  //         imageLeft {
  //           alt
  //           asset {
  //             fluid(maxWidth: 4000) {
  //               ...GatsbySanityImageFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const {mainText, button, imageRight, imageLeft} = data.sanityHomepage.hero
  const {mainText, button, imageRight, imageLeft} = props.data

  return (
    <Wrapper noSpace theme={lightPulp} hasGrid>
      <HeroHomeWrapper id='HeroHomeWrapperEl'>
        <Side>
          <SideImg fluid={imageLeft.asset.fluid} alt={imageLeft.alt} />
        </Side>
        <Side>
          <SideImg fluid={imageRight.asset.fluid} alt={imageRight.alt} />
        </Side>

        <CenteredBox>
          {mainText}

          <HeroButton {...button} as={Button} />
          <PineappleDudeWrap>
            <PineappleDudeFile />
          </PineappleDudeWrap>
        </CenteredBox>
      </HeroHomeWrapper>
    </Wrapper>
  )
}

export default HeroHome
