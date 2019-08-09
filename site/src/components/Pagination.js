import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {rgba, getContrast, readableColor} from 'polished'

import PrevArrow from '../../static/baseline-arrow_back-24px.svg'
import NextArrow from '../../static/baseline-arrow_forward-24px.svg'
import PineappleDudeFile from '../../static/pineapple-man.svg'
import {Wrapper, H1, H3, SubHeading, Container} from '../elements'
import {base} from '../utilities/styles'

const Prev = styled.li`

`

const Next = styled.li`

`

const PaginationWrap = styled.nav`
  /* position: relative; */

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }


    a {
      display: grid;
      align-items: center;
      grid-template-columns: auto auto;
      grid-gap: 40px;
      color: ${props => props.theme.colors.text};
      font-size: 30px;
      font-weight: ${base.fontWeights.bold};
    }

    svg {
      height: 40px;
      width: 40px;
    }

`

const Pagination = ({data}) => {
  return (
    <Wrapper hasGrid>
      <Container>
        <PaginationWrap>
          <ul>
            <Prev>
              <Link to='/'>
                <PrevArrow />
                <span>Previous Page</span>
              </Link>
            </Prev>
            <Next>
              <Link to='/'>
                <span>Next Page</span>
                <NextArrow />
              </Link>
            </Next>
          </ul>
        </PaginationWrap>
      </Container>
    </Wrapper>
  )
}

export default Pagination
