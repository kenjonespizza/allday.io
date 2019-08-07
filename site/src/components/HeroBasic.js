import React from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import {Wrapper as HeroBasicWrapper, H1, SubHeading, Container as HeroBasicContainer} from '../elements'
import {base} from '../utilities/styles'

const Wrapper = styled(HeroBasicWrapper)``

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
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    font-size: 70px;
  }
  
  p {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    margin-top: ${base.spacings.base};
  }
`

const HeroBasic = () => {
  return (
    <Wrapper hasGrid theme={base} extraSpace>
      <Container>
        <SubHeading>New Website</SubHeading>
        <H1>Want Branding</H1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 200% increase urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, extremely fast load times leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti blandit nunc tortor eu nibh blandit nunc tortor.</p>
      </Container>
    </Wrapper>
  )
}

export default HeroBasic
