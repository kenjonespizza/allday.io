import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {rgba} from 'polished'
import Img from 'gatsby-image'

import LogoFile from '../../static/AllDayLogo.svg'
import {Wrapper as FooterWrapper, Container, H2, HeadingBlock, SubHeading} from '../elements'
import {base, darkPulp, colorsList, media, transition} from '../utilities/styles'

const Wrapper = styled(FooterWrapper)`
  border-top: ${props => props.theme.colors.lines && rgba(props.theme.colors.lines, 0.05)} solid 1px;
  background-color: ${base.colors.white};
`

const Logo = styled(LogoFile)`
  left: 48px;
  top: 38px;
  margin-left: 30px;
`

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${base.fontSizes.small};
  flex-direction: column-reverse;

  ${media.medium`
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  `}

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
  background-color: ${base.colors.pulp};
  color: ${base.colors.white};
  height: 100vw;
  /* padding: 100px 40px; */
  z-index: -10;
  overflow: hidden;
  ${transition({})};

  & > .cta-wrap {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 100vw;
    display: flex;
    align-items: center;
    z-index: 0;

    > a {
      color: ${base.colors.white};
      background-color: ${base.colors.black};
      padding: ${base.spacings.base}px;
      border-radius: 10px;
      border: 5px solid ${base.colors.white};
      ${transition({})};

      h2 {
        ${transition({})};
      }

      &:hover {
        transform: scale(1.1);
        background-color: ${base.colors.white};
        color: ${base.colors.black};
        border-color: ${base.colors.black};

        h2 {
          color: ${base.colors.black};

          span.accent {
            color: ${base.colors.pulp} !important;
          }
        }
      }
    }
  }
`

const CtaBG = styled(Img)`
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
  
  ${(position) => (position === 'center') && `
    transform: translateY(25%);
  `}
`

const Footer = () => {
  const footerCtaBG = useStaticQuery(graphql`
    query pinappleBGQuery {
      footerCtaBG1: file(relativePath: { eq: "img_4217_37642369585_o.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerCtaBG2: file(relativePath: { eq: "img_4397_37814372024_o.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerCtaBG3: file(relativePath: { eq: "img_4420_37642645585_o.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footerCtaBG4: file(relativePath: { eq: "img_4441_26754311699_o.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]]
  }

  // array of background images.  A random image will be choosen.
  const ctaBgArray = {
    1: {
      bg: footerCtaBG.footerCtaBG1.childImageSharp.fluid,
      position: 'center'
    },
    2: {
      bg: footerCtaBG.footerCtaBG2.childImageSharp.fluid,
      position: 'center'
    },
    3: {
      bg: footerCtaBG.footerCtaBG3.childImageSharp.fluid,
      position: 'center'
    },
    4: {
      bg: footerCtaBG.footerCtaBG4.childImageSharp.fluid,
      position: 'center'
    }
  }

  const ctaBG = randomProperty(ctaBgArray)

  return (
    <>
      <Wrapper hasGrid addSpace theme={base}>
        <FooterContainer as='footer'>
          <div>
            <p>This site is built with <a href='https://gatsbyjs.org' target='_blank' rel='noopener noreferrer'>Gatsby</a>, hosted by <a href='https://netlify.com' target='_blank' rel='noopener noreferrer'>Netlify</a>, and populated by <a href='https://sanity.io' target='_blank' rel='noopener noreferrer'>Sanity</a>. Checkout the source code on <a href='https://github.com' target='_blank' rel='noopener noreferrer'>Github</a></p>
            <p>© 2015–2019 AllDayIO. All rights reserved.</p>
          </div>
          <Link to='/'>
            <Logo alt='AllDay' />
          </Link>
        </FooterContainer>
      </Wrapper>
      <Wrapper hasGrid addSpace theme={darkPulp} noSpace zIndex='1'>
        <FooterCta>
          <CtaBG fluid={ctaBG.bg} position={ctaBG.position} />
          <div className='cta-wrap'>
            <Link to='/get-in-touch'>
              <HeadingBlockStyled>
                <SubHeading>
                Ready to get the ball rolling?
                </SubHeading>
                <H2>
                Let us know what you need!
                </H2>
              </HeadingBlockStyled>
            </Link>
          </div>
        </FooterCta>
      </Wrapper>
    </>
  )
}

export default Footer
