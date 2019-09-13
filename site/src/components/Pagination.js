import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {rgba, getContrast, readableColor} from 'polished'

import PreviousArrow from '../../static/baseline-arrow_back-24px.svg'
import NextArrow from '../../static/baseline-arrow_forward-24px.svg'
import PineappleDudeFile from '../../static/pineapple-man.svg'
import {Wrapper, H1, H3, SubHeading, Container} from '../elements'
import {base, darkPulp, transition, media} from '../utilities/styles'

const PaginationWrap = styled.nav`
  /* position: relative; */

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    /* flex-direction: column; */
  }

  li  {
    width: 50%;
    a {
      grid-template-areas:  "arrow"
                            "link";

        ${media.medium`
          grid-template-areas:  "arrow link";
        `}
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

const PaaginationLink = styled(Link)`
  display: grid;
  align-items: center;
  grid-gap: 10px;
  color: ${props => props.theme.colors.text};
  font-weight: ${base.fontWeights.bold};
  /* ${transition({})}; */

  ${media.medium`
    grid-template-columns: auto auto;
    grid-gap: ${base.spacings.base}px;
  `}

  div {
    grid-area: link;
  }

  span {
    color: ${props => props.theme.colors.text};
    ${transition({})};
  }

  .link-main {
    font-size: 14px;

    ${media.medium`
      font-size: 30px;
    `}
  }
  
  .link-sub {
    font-size: 13px;
    font-weight: ${base.fontWeights.light};
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};
    /* color: ${props => props.color}; */

    ${media.medium`
      font-size: 15px;
    `}
  }

  svg {
    grid-area: arrow;
    height: 40px;
    width: 40px;
    ${transition({})};
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
    color: ${props => props.color};
    
    ${media.medium`
      grid-gap: calc(${base.spacings.base}px + 10px);
    `}

    span {
      color: ${props => props.theme.colors.accent};
      color: ${props => props.color};
    }

    svg {
      fill: ${props => props.color};
    }
  }
`

const Previous = styled.li`
  a {
    ${media.medium`
      grid-template-columns: 40px auto;
    `}
  }

`

const Next = styled.li`
text-align: right;
  
  a {
    ${media.medium`
    grid-template-columns: auto 40px;
      grid-template-areas:  "link arrow" !important;
    `}
  }

div {
  justify-self: end;
}

 svg {
  justify-self: end;
 }

`

const Pagination = ({next, previous}) => {
  return (
    <Wrapper hasGrid theme={base}>
      <Container>
        <PaginationWrap>
          <ul>
            {(previous && previous.path) ? (
              <Previous>
                <PaaginationLink to={previous.path} color={previous.color}>
                  <PreviousArrow />
                  <div>
                    <span className='link-sub'>{previous.title}</span>
                    <span className='link-main'>{previous.text}</span>
                  </div>
                </PaaginationLink>
              </Previous>
            ) : (
              <div />
            )}
            {(next && next.path) ? (
              <Next>
                <PaaginationLink to={next.path} color={next.color}>
                  <div>
                    <span className='link-sub'>{next.title}</span>
                    <span className='link-main'>{next.text}</span>
                  </div>
                  <NextArrow />
                </PaaginationLink>
              </Next>
            ) : (
              <div />
            )}
          </ul>
        </PaginationWrap>
      </Container>
    </Wrapper>
  )
}

export default Pagination
