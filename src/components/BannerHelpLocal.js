import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import {Wrapper, Container} from '../elements/'
import {base, mqs, media} from '../utilities/styles/'

const BannerHelpLocal = ({data}) => {
  return (
    <Wrapper hasGrid theme={base} noSpace>
      <BannerHelpLocalWrap to='helplocal'>
        <Container>
          Check out <strong>HelpLocal.us</strong> details and sign up page!
        </Container>
      </BannerHelpLocalWrap>
    </Wrapper>
  )
}

export default BannerHelpLocal

const BannerHelpLocalWrap = styled(Link)`
  background-color: #B63563;
  color: ${props => props.theme.colors.white} !important;
  text-decoration: none !important;
  padding: 15px 0;
  text-align: center;
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
`
