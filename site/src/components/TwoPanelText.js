import React from 'react'
import styled, {withTheme} from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'

import {Wrapper as TwoPanelTextWrapper, H1, SubHeading, Container as TwoPanelTextContainer} from '../elements'
import {base, media} from '../utilities/styles'

const Wrapper = styled(TwoPanelTextWrapper)`
  /* background-color: ${props => props.theme.colors.accent}; */
  /* color: ${props => props.theme.colors && readableColor(props.theme.colors.accent, base.colors.white, base.colors.black)} */
`

const Container = styled(TwoPanelTextContainer)`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 50px; */
  color: ${props => props.textColor};

  ${media.medium`
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  `}
  
  ${media.medium`
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
  `}

  ${SubHeading} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    color: ${props => props.textColor && rgba(props.textColor, 0.8)};

    &:after {
      /* content: "${props => props.textColor}"; */
    }
  }
  
  ${H1} {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    font-size: 70px;
    color: ${props => props.textColor};
  }
  
  p {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
    margin-top: ${base.spacings.base};
    color: ${props => props.textColor};
    /* color: ${props => props.textColor && rgba(props.textColor, 0.8)}; */

    strong {
      color: ${props => props.textColor};
    }
  }
`

const Side = styled.div`
  grid-column: span 1;
`

const HeroBasic = (props) => {
  const textColor = getContrast(props.theme.colors.accent, base.colors.white) > 4.5 ? base.colors.white : base.colors.black
  return (
    <Wrapper hasGrid lineColor={textColor} backgroundColor={props.theme.colors.accent}>
      <Container textColor={textColor}>
        <Side>
          <h3>Want Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 200% increase urna. In nisi neque, aliquet vel, dapibus id, <strong>mattis vel</strong>, nisi. Sed pretium, ligula sollicitudin laoreet viverra, extremely fast load times leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti blandit nunc tortor eu nibh blandit nunc tortor.</p>
        </Side>
        <Side>
          <h3>Want Branding</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 200% increase urna. In nisi neque, aliquet vel, dapibus id, <strong>mattis vel</strong>, nisi. Sed pretium, ligula sollicitudin laoreet viverra, extremely fast load times leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti blandit nunc tortor eu nibh blandit nunc tortor.</p>
        </Side>
      </Container>
    </Wrapper>
  )
}

export default withTheme(HeroBasic)
