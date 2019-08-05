import React, {useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Link from 'gatsby-link'

import LogoFile from '../../static/AllDayLogo.svg'
import {transition} from '../utilities/styles'
import SlideOutMenu from '../components/SlideOutMenu'
import {useGlobalState} from './Layout'
import {GridLines} from '../elements/GridLines'
import {
  mapEdgesToNodes
} from '../utilities/helpers'

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
`

const Nav = styled.nav`
  ul, li {
    list-style: none;
  }

  ul {
    display: flex;
  }

  li {
    margin: 0 10px;

    a {
      color: ${props => props.theme.colors.black};
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
  top: calc((124px / 2) - 19px);
  z-index: 20;
  position: fixed;
  background: none;
  border: none;
  color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: ${props => props.isOpen ? props.theme.colors.pulp : props.theme.colors.watermelly};
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


      navigation: allSanityPages(filter: {pageInfo: {showInMainNav: {eq: true}}}) {
        edges {
          node {
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

  `)

  // const {logo} = data.site.nodes[0]
  // console.log('logo:', logo)

  const siteNodes = (data || {}).site
    ? mapEdgesToNodes(data.site)
    : []

  // console.log('siteNodes:', siteNodes)

  const navigationNodes = (data || {}).navigation
    ? mapEdgesToNodes(data.navigation)
    : []

  return (
    <>
      <Link to='/'>
        <Logo src={siteNodes[0].logo.asset.url} alt={siteNodes[0].logo.alt} isopen={isOpen ? 'true' : 'false'} />
      </Link>
      <StyledNavBar id='nav-bar'>
        <GridLines />
        <Nav>
          <ul>
            {navigationNodes.map(node => {
              return (
                <li key={node._id}>
                  <Link to={`/${node.pageInfo.slug.current}`}>{node.pageInfo.pageName}</Link>
                </li>
              )
            })}
          </ul>
        </Nav>
      </StyledNavBar>
      <SlideOutMenu />

      <MenuButton onClick={() => toggleMenu(!isOpen)} aria-expanded={isOpen} isOpen={isOpen}>{isOpen ? 'Close' : 'Menu'}</MenuButton>

    </>
  )
}

export default NavBar
