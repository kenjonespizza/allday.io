import React from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'

import {Wrapper, H1, H3, SubHeading, Container as Gallery1Container} from '../elements'
import {base} from '../utilities/styles'

const Container = styled(Gallery1Container)`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  columns: 2 calc(${base.sizes.medium}px / 2);
  /* columns: 2 300px; */
  column-gap: 50px;
  column-fill: auto;

  & > h1, 
  & > h2, 
  & > h3, 
  & > h4, 
  & > h5, 
  & > h6 {
    color: ${props => props.theme.colors.text};
    margin-top: 0;
  }
  
  & > div {
    /* grid-column: span 1; */
    margin-bottom: 50px;

    img {
      width: 100%;
    }
  }

  strong {
    color: ${props => props.theme.colors.accent};
  }
`

const Gallery1 = ({data}) => {
  return (
    <Wrapper hasGrid extraSpace>
      <Container>
        <div>
          <img src='https://images.unsplash.com/photo-1556910109-a14b4226abff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1565210339691-46c2d66d0ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' />
        </div>
        <div>
          <img src='https://images.unsplash.com/photo-1565207470645-0c3bff5d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
        </div>
      </Container>
    </Wrapper>
  )
}

export default Gallery1
