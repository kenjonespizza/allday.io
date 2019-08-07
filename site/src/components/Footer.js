import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql, Link} from 'gatsby'

import LogoFile from '../../static/AllDayLogo.svg'
import {Wrapper, Container} from '../elements'
import {base, colorsList} from '../utilities/styles'
import {mapEdgesToNodes} from '../utilities/helpers'

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

const Footer = () => {
  return (
    <Wrapper addSpace theme={base}>
      <FooterContainer>
        <div>
          <p>© 2015–2019 AllDayIO. All rights reserved.</p>
          <p>This site is built with <a href='https://gatsbyjs.org'>Gatsby</a>, hosted by <a href='https://netlify.com'>Netlify</a>, and populated by <a href='https://sanity.io'>Sanity</a>. Checkout the source code on <a href='https://github.com'>Github</a></p>
        </div>
        <Link to='/'>
          <Logo alt='AllDay' />
        </Link>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
