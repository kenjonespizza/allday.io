import React, {useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from 'gatsby-link'
import {rgba} from 'polished'

import LogoFile from '../../static/AllDayLogo.svg'
import {transition, base, bounce, pulse, lightWatermelly} from '../utilities/styles'
import SlideOutMenu from '../components/SlideOutMenu'
import {useGlobalState} from './Layout'
import {GridLines, Wrapper} from '../elements'
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
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0px 20px rgba(0,0,0,.2);
`

const Nav = styled.nav`
  ul, li {
    list-style: none;
  }

  ul {
    display: flex;
  }

  li {
    margin-left: 50px;
    position: relative;

    &:first-of-type {
      margin-left: 0;
    }

    a {
      color: ${base.colors.black};
      font-weight: ${base.fontWeights.medium};
      
      &:hover {
        color: ${props => props.theme.colors.accent}
      }
    }

    &.hasNotification:after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 8px;
      background-color: ${props => props.theme.colors.accent};
      position: absolute;
      top: -11px;
      right: -12px;
      color: ${props => props.theme.colors.accent && rgba(props.theme.colors.accent, 0.5)};
      animation: ${bounce} 2s ease-in-out infinite alternate, ${pulse} 4s linear infinite;
    }
  }
`

const Logo = styled(LogoFile)`
  left: 48px;
  top: 38px;
  z-index: 20;
  position: fixed;
  /* transform: scale(${props => props.isopen === 'true' ? 1.5 : 1}); */
  /* width: ${props => props.isopen === 'true' ? '300px' : '105px'} */
  ${transition({})};

  path {
    fill: ${props => props.isopen === 'true' ? props.theme.colors.white : props.theme.colors.black};
   
    /* animation: ${props => colorSwap} 2s linear alternate infinite; */
    ${props => props.isopen === 'true'
    ? css`animation: ${props => colorSwap} 15s linear infinite;`
    : css`animation: none;`
}
  }
`

const MenuButton = styled.button`
  right: 48px;
  top: calc((124px / 2) - 24px);
  z-index: 20;
  position: fixed;
  background: none;
  border: 1px solid ${rgba(base.colors.black, 0.5)};
  color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
  padding: 15px;
  font-weight: ${base.fontWeights.medium};
  cursor: pointer;

  &:hover {
    color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.white};
    background-color: ${props => props.isOpen ? props.theme.colors.accent : props.theme.colors.accent};
    border-color: ${props => props.isOpen ? props.theme.colors.accent : props.theme.colors.accent};
  }
`

const NavBar = () => {
  const [isOpen, toggleMenu] = useGlobalState('isMenuOpen')

  const data = useStaticQuery(graphql`
    query HEADER_QUERY {
      site: allSanitySiteSettings(limit: 1) {
        edges {
          node {
            logo {
              alt
              asset {
                url
              }
            }
          }
        }
      }


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

  // const {logo} = data.site.nodes[0]
  // console.log('logo:', logo)

  // console.log('siteNodes:', siteNodes)

  return (
    <Wrapper noSpace theme={base}>
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
                  <Link to={`/${pageInfo.slug.current}`}>{pageInfo.pageName}</Link>
                </li>
              )
            })}
          </ul>
        </Nav>
      </StyledNavBar>
      <SlideOutMenu />

      <MenuButton onClick={() => toggleMenu(!isOpen)} aria-expanded={isOpen} isOpen={isOpen}>{isOpen ? 'Close' : 'Menu'}</MenuButton>

    </Wrapper>
  )
}

export default NavBar
