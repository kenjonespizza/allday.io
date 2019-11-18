import React, {useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from 'gatsby-link'
import {rgba} from 'polished'

import LogoFile from '../../static/AllDayLogo.svg'
import {transition, base, bounce, pulse, lightWatermelly, media} from '../utilities/styles'
import SlideOutMenu from '../components/SlideOutMenu'
import {useGlobalState} from './Layout'
import {GridLines, Wrapper, Button} from '../elements'
import {mapEdgesToNodes} from '../utilities/helpers'

function colorSwap (props) {
  return keyframes`
    from {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 1}% {
      fill: ${props.theme.colors.pulp};
    }
    ${(100 / 6) * 2}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 3}% {
      fill: ${props.theme.colors.watermelly};
    }
    ${(100 / 6) * 4}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 5}% {
      fill: ${props.theme.colors.seal};
    }
     ${(100 / 6) * 4}% {
      fill: ${props.theme.colors.white};
    }
    ${(100 / 6) * 5}% {
      fill: ${props.theme.colors.aloe};
    }
    to {
      fill: ${props.theme.colors.white};
    }
  `
}

const StyledNavBar = styled.header`
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 124px;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  padding: 0 ${base.spacings.base}px;
  /* box-shadow: 0 0px 20px rgba(0,0,0,.2); */
  border-bottom: ${props => props.theme.grid.color && rgba(props.theme.grid.color, props.theme.grid.opacity)} solid 1px;
`

const Nav = styled.nav`
display: none;

${media.large`
  display: block;
`}
  ul, li {
    list-style: none;
  }

  ul {
    display: flex;
    margin: 0;
  }

  li {
    margin-left: 50px;
    position: relative;

    &:first-of-type {
      margin-left: 0;
    }

    a {
      color: ${base.colors.text};
      font-weight: ${base.fontWeights.medium};
      postion: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 0;
        left: auto;
        height: 4px;
        width: 0%;
        background-color: ${props => props.theme.colors.text};
        ${transition({
          duration: '.4s',
          ease: 'ease-in-out'
        })};
      }
      
      &:hover, &.active {
        /* color: ${props => props.theme.colors.accent} */

        &:after {
          width: 100%;
          left: 0;
        }
      }
    }

    &.hasNotification:after {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 20px;
      background-color: ${base.colors.watermelly};
      position: absolute;
      top: -11px;
      right: -12px;
      color: ${rgba(base.colors.watermelly, 0.5)};
      /* animation: ${bounce} 2s ease-in-out infinite alternate, ${pulse} 4s linear infinite; */
      animation: ${pulse} 4s linear infinite;
    }
  }
`

const Logo = styled(LogoFile)`
  left: ${base.spacings.base}px;
  top: 38px;
  z-index: 20;
  position: fixed;
  /* transform: scale(${props => props.isopen === 'true' ? 1.5 : 1}); */
  /* width: ${props => props.isopen === 'true' ? '300px' : '105px'} */
  ${transition({})};

  path {
    fill: ${props => props.isopen === 'true' ? props.theme.colors.white : props.theme.colors.black};
   
    /* animation: ${props => colorSwap} 2s linear alternate infinite; */
    /* ${props => props.isopen === 'true'
    ? css`animation: ${props => colorSwap} 15s linear infinite;`
    : css`animation: none;`
} */
  }
`

const MenuButton = styled.button`
  right: ${base.spacings.base}px;
  top: calc((124px / 2) - 24px);
  z-index: 20;
  position: fixed;
  background: none;
  border: 1px solid ${rgba(base.colors.black, 0.5)};
  color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
  padding: 15px;
  font-weight: ${base.fontWeights.medium};
  cursor: pointer;
  display: block;

  ${media.large`
    display: ${props => props.isOpen ? 'block' : 'none'};
  `}

  &:hover {
    color: ${props => props.isOpen ? props.theme.colors.black : props.theme.colors.white};
    background-color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
    border-color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
  }
`

const NavBar = () => {
  const [isOpen, toggleMenu] = useGlobalState('isMenuOpen')

  const data = useStaticQuery(graphql`
    query HEADER_QUERY {
      navigation: allSanitySiteSettings {
        edges {
          node {
            navLinks {
              _id
              pageInfo {
                pageName
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }

  `)

  return (
    <Wrapper noSpace theme={lightWatermelly} zIndex='11'>
      <Link to='/'>
        <Logo isopen={isOpen ? 'true' : 'false'} />
      </Link>
      <StyledNavBar id='nav-bar'>
        <GridLines />
        <Nav>
          <ul>
            {data.navigation.edges && data.navigation.edges[0].node.navLinks.map(node => {
              const {pageInfo, _id} = node
              return (
                <li key={_id} className={pageInfo.slug.current.includes('sample') ? 'hasNotification' : ''}>
                  <Link
                    activeClassName='active' partiallyActive
                    to={`/${pageInfo.slug.current}`}
                  >{pageInfo.pageName}
                  </Link>
                </li>
              )
            })}
            <li key='blog'>
              <Link activeClassName='active' partiallyActive to='/design-studio-blog'>Blog</Link>
            </li>
            {/* Todo: Add Search https://kyleshevlin.com/how-to-add-algolia-search-to-a-gatsby-site */}
          </ul>
        </Nav>
      </StyledNavBar>
      <SlideOutMenu menu={data.navigation.edges[0].node.navLinks} />

      <MenuButton onClick={() => toggleMenu(!isOpen)} aria-expanded={isOpen} isOpen={isOpen}>{isOpen ? 'Close' : 'Menu'}</MenuButton>

    </Wrapper>
  )
}

export default NavBar
