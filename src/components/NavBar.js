import React, {useEffect, useState} from 'react'
import styled, {keyframes, css} from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {rgba} from 'polished'
import Headroom from 'react-headroom'
import Dribbble from '../img/social/Dribbble.Icon'
import Instagram from '../img/social/Instagram.Icon'
import Twitter from '../img/social/Twitter.Icon'

import {links} from '../utilities/links'
import LogoFile from '../../static/AllDayLogo.svg'
import {transition, base, bounce, pulse, lightWatermelly, darkWatermelly, media, colorsList} from '../utilities/styles'
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

const StyledWrapper = styled(Wrapper)`
  overflow: visible !important;
  /* display: flex;
  align-items: center; */
`

const StyledNavBar = styled.header`
  /* background-color: ${props => props.theme.colors.white}; */
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 94px;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  overflow: auto;
  padding: 0 ${base.spacings.base}px;
  /* box-shadow: 0 0px 20px rgba(0,0,0,.2); */
  border-bottom: ${props => props.theme.grid.color && rgba(props.theme.grid.color, props.theme.grid.opacity)} solid 1px;
  ${transition({})};
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
    align-items: baseline;
  }

  li {
    margin-left: 30px;
    position: relative;

    ${media.xLarge`
      margin-left: 50px;
    `}

    &:first-of-type {
      margin-left: 0;
    }

    a:not([class^="Button"]) {
      color: ${base.colors.text} !important;
      font-weight: ${base.fontWeights.medium};
      font-size: 15px;
      position: relative;
      text-decoration: none;
      ${transition({})};

      ${media.xLarge`
        font-size: 17px;
      `}

      /* &:not(.social-icon):after {
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
      } */
      
      /* &:hover, &.active {

        &:after {
          width: 100%;
          left: 0;
        }
      } */
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
  top: 50%;
  z-index: 20;
  position: fixed;
  transform: translateY(-50%);
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
  top: 20px;
  z-index: 20;
  position: fixed;
  background: none;
  border: 1px solid ${rgba(base.colors.black, 0.5)};
  border-color: ${props => props.isOpen ? props.theme.colors.white : props.theme.colors.black};
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

const StyledHeadroom = styled(Headroom)`
    .headroom {
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
    }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);

    ${MenuButton} {
      top: 20px;
    }
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);

    ${StyledNavBar} {
      height: 94px;
      /* filter: invert(100%); */
    }
  }
`

const Social = styled.li`
  /* margin-top: 40px; */
  ul {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style:  none;

    li {
      margin: 0;
      padding-right: 30px;
    }
  }

  a:not([class^="Button"]) {
    svg path {
      fill: ${base.colors.black};
      ${transition({})};
    }

    &:hover {
      svg path {
        fill: ${props => props.theme.colors.seal};
      }
    }

    &.facebook {
      svg path {
        fill: ${colorsList.facebook};
      }
      &:hover {
        svg path {
          fill: ${base.colors.black};
        }
      }
    }
    &.twitter {
      svg path {
        fill: ${colorsList.twitter};
      }
      &:hover {
        svg path {
          fill: ${base.colors.black};
        }
      }
    }
    &.linkedIn {
      svg path {
        fill: ${colorsList.linkedIn};
      }
      &:hover {
        svg path {
          fill: ${base.colors.black};
        }
      }
    }
    &.instagram {
      svg path {
        fill: ${colorsList.instagram};
      }
      &:hover {
        svg path {
          fill: ${base.colors.black};
        }
      }
    }
    &.dribbble {
      svg path {
        fill: ${colorsList.dribbble};
      }
      &:hover {
        svg path {
          fill: ${base.colors.black};
        }
      }
    }
  }
`

const ButtonLink = styled(Button)`
  margin-bottom: 0;
  font-size: inherit;
  padding: 17px 25px 15px 25px;
  background-color: ${props => props.theme.colors.black};
  border-color: ${props => props.theme.colors.black};
`

const NavBar = () => {
  const [isOpen, toggleMenu] = useGlobalState('isMenuOpen')
  const [isPinned, setAsPinned] = useState(false)

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

      sanitySiteSettings {
        socialMediaHandle {
          facebook
          instagram
          linkedIn
          twitter
          dribbble
        }
      }
    }

  `)

  return (
    <>
      <StyledHeadroom calcHeightOnResize disableInlineStyles onPin={() => setAsPinned(true)} onUnfix={() => setAsPinned(false)} downTolerance={25}>
        <StyledWrapper noSpace theme={lightWatermelly} zIndex='11'>
          <Link to='/'>
            <Logo isopen={isOpen ? 'true' : 'false'} />
          </Link>
          <StyledNavBar id='nav-bar'>
            <GridLines />
            <Nav>
              <ul>
                {data?.navigation?.edges[0]?.node?.navLinks && data.navigation.edges[0].node.navLinks.map(node => {
                  if (node) {
                    const {pageInfo, _id} = node

                    if (pageInfo.slug.current === 'call-design-team') {
                      return (
                        <li key={_id} className={pageInfo.slug.current.includes('work') ? 'hasNotification' : ''}>
                          <ButtonLink
                            activeClassName='active' partiallyActive
                            slug={node}
                            color='black'
                            isGhost={false}
                          >{pageInfo.pageName}
                          </ButtonLink>
                        </li>
                      )
                    }
                    return (
                      <li key={_id} className={pageInfo.slug.current.includes('work') ? 'hasNotification' : ''}>
                        <Link
                          activeClassName='active' partiallyActive
                          to={`/${pageInfo.slug.current}`}
                        >{pageInfo.pageName}
                        </Link>
                      </li>
                    )
                  }
                }
                )}
                {/* <li key='blog'>
                  <Link activeClassName='active' partiallyActive to={links.blog}>Blog</Link>
                </li> */}

                <Social>
                  <ul>
                    {data.sanitySiteSettings.socialMediaHandle.dribbble && (
                      <li>
                        <a href={`https://dribbble.com/${data.sanitySiteSettings.socialMediaHandle.dribbble}`} target='_blank' rel='noopener noreferrer' className='social-icon dribbble'>
                          <Dribbble size={20} />
                        </a>
                      </li>
                    )}
                    {data.sanitySiteSettings.socialMediaHandle.twitter && (
                      <li>
                        <a href={`https://twitter.com/${data.sanitySiteSettings.socialMediaHandle.twitter}`} target='_blank' rel='noopener noreferrer' className='social-icon twitter'>
                          <Twitter size={20} />
                        </a>
                      </li>
                    )}
                    {data.sanitySiteSettings.socialMediaHandle.instagram && (
                      <li>
                        <a href={`https://instagram.com/${data.sanitySiteSettings.socialMediaHandle.instagram}`} target='_blank' rel='noopener noreferrer' className='social-icon instagram'>
                          <Instagram size={20} />
                        </a>
                      </li>
                    )}
                  </ul>
                </Social>

                {/* Todo: Add Search https://kyleshevlin.com/how-to-add-algolia-search-to-a-gatsby-site */}
              </ul>
            </Nav>
          </StyledNavBar>
          <SlideOutMenu menu={data.navigation.edges[0].node.navLinks} />

          <MenuButton onClick={() => toggleMenu(!isOpen)} aria-expanded={isOpen} isOpen={isOpen}>{isOpen ? 'Close' : 'Menu'}</MenuButton>

        </StyledWrapper>
      </StyledHeadroom>
    </>
  )
}

export default NavBar
