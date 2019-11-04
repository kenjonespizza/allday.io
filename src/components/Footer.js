import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {rgba} from 'polished'

import LogoFile from '../../static/AllDayLogo.svg'
import {Wrapper as FooterWrapper, Container, Heading, H2, H3, H4, HeadingBlock, SubHeading} from '../elements'
import {base, darkPulp, colorsList, media, transition} from '../utilities/styles'
import {mapEdgesToNodes} from '../utilities/helpers'

const Wrapper = styled(FooterWrapper)`
  background-color: ${base.colors.white};
  border-top: ${props => props.theme.colors.lines && rgba(props.theme.colors.lines, 0.05)} solid 1px;
`

const Logo = styled(LogoFile)`
  left: 48px;
  top: 38px;
  margin-left: 30px;
`

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${base.fontSizes.small};

  ${Object.keys(colorsList).map(function (color) {
    return 'a[href*="' + color + '"] {color:' + colorsList[color] + ';}'
  }).join('')}
  
  a {
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      text-decoration-style: dashed;
    }
  }
 
 
  /* a[href*='gatsbyjs']{
    color: ${colorsList.gatsby};
  } */
`

const HeadingBlockStyled = styled(HeadingBlock)`
  margin-bottom: 0;

  .accent {
    color: ${base.colors.white} !important;
  }

  a > * {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: ${base.colors.white} !important;
      transform: scale(1.1);

      .accent {
        color: ${base.colors.white} !important;
        transform: scale(1.1);
      }
    }
  }
`

const FooterCta = styled.div`
  background-color: ${base.colors.black};
  color: ${base.colors.white};
  height: 400px;
  /* padding: 100px 40px; */
  z-index: -10;
  overflow: hidden;
  ${transition({})};

    & > div {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      /* z-index: -1; */
      height: 400px;
      display: flex;
      align-items: center;
    }

  &:hover {
    background-color: ${base.colors.seal};

    a {
      transform: scale(1.1);
    }
  }
`

const Footer = () => {
  return (
    <>
      <Wrapper hasGrid addSpace theme={base} backgroundColor={base.colors.white}>
        <FooterContainer as='footer'>
          <div>
            <p>© 2015–2019 AllDayIO. All rights reserved.</p>
            <p>This site is built with <a href='https://gatsbyjs.org'>Gatsby</a>, hosted by <a href='https://netlify.com'>Netlify</a>, and populated by <a href='https://sanity.io'>Sanity</a>. Checkout the source code on <a href='https://github.com'>Github</a></p>
          </div>
          <Link to='/'>
            <Logo alt='AllDay' />
          </Link>
        </FooterContainer>
      </Wrapper>
      <Wrapper hasGrid addSpace theme={darkPulp} noSpace zIndex='1'>
        <FooterCta>
          <div>
            <HeadingBlockStyled>
              <SubHeading>
                Ready to get the ball rolling?
              </SubHeading>
              <Link to='/get-in-touch'>
                <H2>
                Let us know what you need!
                </H2>
              </Link>
            </HeadingBlockStyled>
          </div>
        </FooterCta>
      </Wrapper>
    </>
  )
}

export default Footer
