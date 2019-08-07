import React from 'react'
import styled from 'styled-components'

import {Wrapper, Container, SubHeading, H1, Button} from '../elements'
import {darkWatermelly, transition} from '../utilities/styles'
import PineappleDudeFile from '../../static/pineapple-man.svg'

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

const Banner1 = ({data}) => {
  const {heading, description, button} = data

  return (
    <Wrapper theme={darkWatermelly} hasGrid addSpace>
      <Container>
        <SubHeading>
          {heading.subHeading && heading.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {heading.heading && heading.heading}
        </H1>
        <p>{description}</p>
        <BannerButton {...button} />
      </Container>
      <PineappleDude />
    </Wrapper>
  )
}

export default Banner1
