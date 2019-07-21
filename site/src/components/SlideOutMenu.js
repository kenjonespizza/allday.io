import React, {useEffect} from 'react'
import {useStaticQuery, grapgql} from 'gatsby'
import styled, {ThemeProvider, keyframes, css} from 'styled-components'
import Link from 'gatsby-link'
import {rgba} from 'polished'

import {darkYellow, transition} from '../utilities/styles'
import {GridLines} from '../elements/GridLines'
import {useGlobalState} from './Layout'

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
    width: 1200px;
    ul, li {
      list-style: none;
      padding: 0;
    }


    ul {
      display: flex;
      flex-direction: column;
      &:last-child {
        /* border-top: ${props => props.theme.colors.white && rgba(props.theme.colors.white, 0.1)} dotted 1px; */
      }
    }

    a {
      color: ${props => props.theme.colors.white};
      font-size: 45px;
      padding: 10px 0;
      display: block;
      ${transition({})};

      &:hover {
        color: ${props => props.theme.colors.pulp};
      }
    }
  }
`

const SlideOutMenu = () => {
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

  const data = useStaticQuery(graphql`
    query SlideOutNavQuery {
      site: allSanitySiteSettings(limit: 1, filter: {navLinks: {elemMatch: {showInMainNav: {eq: true}}}}) {
        nodes {
          logo {
            alt
            asset {
              url
            }
          }
          navLinks {
            _key
            pageName
            pageUrl {
              current
            }
            showInMainNav
            showInHiddenNav
          }
        }
      }
    }
  `)

  const {navLinks} = data.site.nodes[0]

  return (
    <ThemeProvider theme={darkYellow}>
      <StyledSlideOutMenu isOpen={isOpen}>
        <GridLines />
        <nav>
          <ul>
            {navLinks.map(link => {
              if (link.showInMainNav) {
                return (
                  <li key={link._key}>
                    <Link to={link.pageUrl.current}>{link.pageName}</Link>
                  </li>
                )
              }
            })}
          </ul>
          <ul>
            {navLinks.map(link => {
              if (link.showInHiddenNav) {
                return (
                  <li key={link._key}>
                    <Link to={link.pageUrl.current}>{link.pageName}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
        {/* <button onClick={toggle} aria-expanded={isOpen}>Menu</button> */}

      </StyledSlideOutMenu>
    </ThemeProvider>
  )
}

export default SlideOutMenu
