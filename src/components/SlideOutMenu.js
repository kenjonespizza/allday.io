import React, {useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled, {ThemeProvider, keyframes, css} from 'styled-components'
import Link from 'gatsby-link'
import {rgba} from 'polished'

import {links} from '../utilities/links'
import {darkPulp, darkWatermelly, darkBase, transition, base, media} from '../utilities/styles'
import {GridLines, LinkButtonStyled} from '../elements'
import {useGlobalState} from './Layout'
import {
  mapEdgesToNodes
} from '../utilities/helpers'

// function backgroundSwap (props) {
//   return keyframes`
//     from {
//       background-color: ${props.theme.colors.white};
//     }
//     ${(100/6) * 1}% {
//       background-color: ${props.theme.colors.background};
//     }
//     ${(100/6) * 2}% {
//       background-color: ${props.theme.colors.watermelly};
//     }
//     ${(100/6) * 3}% {
//       background-color: ${props.theme.colors.background};
//     }
//     ${(100/6) * 4}% {
//       background-color: ${props.theme.colors.seal};
//     }
//     ${(100/6) * 5}% {
//       background-color: ${props.theme.colors.background};
//     }
//      ${(100/6) * 4}% {
//       background-color: ${props.theme.colors.aloe};
//     }
//     ${(100/6) * 5}% {
//       background-color: ${props.theme.colors.background};
//     }
//     to {
//       background-color: ${props.theme.colors.pulp};
//     }
//   `
// }

const StyledSlideOutMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: ${props => props.theme.colors.background}; */
  /* background-image: url(https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); */
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.colors.background};
  display: ${props => props.isOpen ? 'flex' : 'none'};
  z-index: 15;
  justify-content: center;
  align-items: center;
  /* animation: ${props => backgroundSwap} 10s linear infinite; */
  /* ${props => props.isOpen
    ? css`animation: ${props => backgroundSwap} 60s linear infinite;`
    : css`animation: none;`
} */

  nav {
    /* width: 1200px; */
    display: flex;
    flex-direction: column;
    align-items: center;

    ul, li {
      list-style: none;
      padding: 0;
    }

    ul:first-of-type {
      /* ${media.large`
        display: none;
      `} */
    }

    /* ul:last-of-type {
      display: none;
    } */

    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      /* margin-right: auto; */
      &:last-child {
        border-top: ${props => props.theme.colors.white && rgba(props.theme.colors.white, 0.1)} dotted 1px;
      }

      a:not([class^="Button"]) {
        color: ${props => props.theme.colors.white};
        font-size: 25px;
        /* padding: 10px 0; */
        display: block;
        font-weight: ${base.fontWeights.bold};
        text-transform: uppercase;
        text-decoration: none;
        ${transition({})};

        ${media.medium`
          font-size: 35px;
        `}

        &.active {
          color: ${props => props.theme.colors.seal};
        }

        &:hover {
          color: ${props => props.theme.colors.seal};
        }
    }

    }
  }
`

const SlideOutMenu = ({menu}) => {
  const [isOpen, toggleMenu] = useGlobalState('isMenuOpen')

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      toggleMenu()
    }
  }

  useEffect(() => {
    // If the menu is open, add event listener for the escape key to close menu.  Otherwise remove event listener.
    if (isOpen) {
      document.addEventListener('keydown', escFunction, false)
    } else {
      document.removeEventListener('keydown', escFunction, false)
    }
  })

  return (
    <ThemeProvider theme={darkBase}>
      <StyledSlideOutMenu isOpen={isOpen}>
        <GridLines />
        <nav>
          <ul>
            {menu && menu.map(node => {
              const {pageInfo, _id} = node

              if (pageInfo) {
                return (
                  <li key={_id}>
                    <Link activeClassName='active' onClick={() => toggleMenu(!isOpen)} to={`/${pageInfo.slug.current}`}>{pageInfo.pageName}</Link>
                  </li>
                )
              }
            })}
            <li key='blog'>
              <Link activeClassName='active' onClick={() => toggleMenu(!isOpen)} partiallyActive to={links.blog}>Blog</Link>
            </li>
          </ul>
          {/* <ul>
            {data.navigation.edges && data.navigation.edges[0].node.hiddenNavLinks.map(node => {
              const {pageInfo, _id} = node

              if (pageInfo) {
                return (
                  <li key={_id}>
                    <Link onClick={() => toggleMenu(!isOpen)} to={`/${pageInfo.slug.current !== '/' ? pageInfo.slug.current : ''}`}>{pageInfo.pageName}</Link>
                  </li>
                )
              }
            })}
          </ul> */}
          <LinkButtonStyled color='watermelly' onClick={() => toggleMenu(!isOpen)} to={links.contact}>
            Start A Project!
          </LinkButtonStyled>
        </nav>

        {/* <Social>
          <ul>
            <li>
              <a href="#">F</a>
            </li>
            <li>
              <a href="#">F</a>
            </li>
            <li>
              <a href="#">F</a>
            </li>
          </ul>
        </Social> */}

      </StyledSlideOutMenu>
    </ThemeProvider>
  )
}

export default SlideOutMenu
