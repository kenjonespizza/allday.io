import React from 'react'
import styled from 'styled-components'

import {Wrapper as Banner1Wrapper, Container, SubHeading, H1, Button} from '../elements'
import {darkWatermelly, transition, darkBase} from '../utilities/styles'
import PineappleDudeFile from '../../static/pineapple-man.svg'

const Wrapper = styled(Banner1Wrapper)`
  /* margin-bottom: 18px; */
`

const BannerButton = styled(Button)`
  margin-top: 30px;
`

const PineappleDude = styled(PineappleDudeFile)`
  position: absolute;
  top: -60px;
  left: calc(100% - 60px);
  height: calc(100% + 78px);
  transform: translate(-50%, 0%);
  /* transform-origin: center center; */
  ${transition({})};

  /* .strokey {
    transform: scale(1);
    transform-origin: center center;
  } */
`

const Banner1 = (props) => {
  const {headingBlock, description, button} = props.data
  const {brandTheme} = props

  // If there is a specific theme passed in, swap out the accent color.
  var bannerTheme
  if (typeof brandTheme !== 'undefined') {
    bannerTheme = {
      ...darkWatermelly, // copy everything from base
      colors: {// override the colors property
        ...darkWatermelly.colors, // copy the everything from base.colors
        accent: brandTheme.colors.accent // override base.colors.accent
      }
    }
  }

  return (
    <Wrapper theme={typeof bannerTheme !== 'undefined' ? bannerTheme : darkWatermelly} hasGrid addSpace>
      <Container>
        <SubHeading>
          {headingBlock.subHeading && headingBlock.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {headingBlock.heading && headingBlock.heading}
        </H1>
        <p>{description}</p>
        <BannerButton {...button} />
      </Container>
      <PineappleDude />
    </Wrapper>
  )
}

export default Banner1
