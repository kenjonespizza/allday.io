import React from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'

import {Wrapper, H1, H3, SubHeading, Container as TextBlock1Container} from '../elements'
import {base} from '../utilities/styles'

const Container = styled(TextBlock1Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  & > h1, 
  & > h2, 
  & > h3, 
  & > h4, 
  & > h5, 
  & > h6 {
    grid-column: 1 / span 1;
    color: ${props => props.theme.colors.text};

    margin-top: 0;
  }
  
  & > div {
    grid-column: 2 / span 3;

    p:first-of-type {
      margin-top: 0;
    }
  }

  strong {
    color: ${props => props.theme.colors.accent};
  }
`

const TextBlock1 = ({data}) => {
  return (
    <Wrapper hasGrid extraSpace>
      <Container>
        <h3>Interactive Web Design</h3>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque 200% increase urna. In nisi neque, aliquet vel, dapibus id, <strong>mattis vel</strong>, nisi. Sed pretium, ligula sollicitudin laoreet viverra, extremely fast load times leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti blandit nunc tortor eu nibh blandit nunc tortor.</p>
        </div>
      </Container>
    </Wrapper>
  )
}

export default TextBlock1
