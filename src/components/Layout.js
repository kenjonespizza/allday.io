import React, {useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {createGlobalState} from 'react-hooks-global-state'

import BannerHelpLocal from '../components/BannerHelpLocal'
import {GlobalStyle, base} from '../utilities/styles'
import NavBar from './NavBar'
import Footer from './Footer'
import {GridLines} from '../elements/'
import {reColorPunctuation} from '../utilities/helpers'

const initialState = {
  isMenuOpen: false
}
export const {GlobalStateProvider, useGlobalState} = createGlobalState(initialState)

const LayoutStyled = styled.div`
  /* padding-top: 124px; */
  overflow: hidden;
`

const BodyWrap = styled.div`
  min-height: calc(100vh - (124px + 400px));
`

const loadScript = src => {
  const tag = document.createElement('script')
  tag.src = src
  tag.defer = true

  document.getElementsByTagName('body')[0].appendChild(tag)
}

const InnerLayout = ({children}) => {
  useEffect(() => {
    reColorPunctuation()
    // loadScript('https://kit.fontawesome.com/8714152a25.js')
  }, [])

  return (
    <div>
      <GlobalStyle />
      <LayoutStyled id='rappers-delight'>
        <BodyWrap>
          <GridLines />
          <NavBar />
          {children}
        </BodyWrap>
        <Footer />
      </LayoutStyled>
    </div>

  )
}

const Layout = ({children, noHelpLocalBanner}) => {
  return (
    <ThemeProvider theme={base}>
      <GlobalStateProvider>
        <InnerLayout>
          {children}
        </InnerLayout>
        {noHelpLocalBanner !== true && (<BannerHelpLocal />)}
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default Layout
