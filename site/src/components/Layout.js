import React, {useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {createGlobalState} from 'react-hooks-global-state'

import {GlobalStyle, base} from '../utilities/styles'
import NavBar from './NavBar'
import {getNavHeight} from '../utilities/helpers'
import {GridLines} from '../elements/GridLines'

if (typeof window !== `undefined`) {
  // Calculate the height of the NavBar on resize (and on load in the NavBar Component), and then add that height to the to pf the page to account for the NavBar overlap.

  let lastKnowScrollPosition = 0
  let ticking = false
  var renderedNavHeight = 124
  var windowEl = window

  window.addEventListener('resize', function (e) {
    lastKnowScrollPosition = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(function () {
        renderedNavHeight = getNavHeight()
        ticking = false
        windowEl = window
      })

      ticking = true
    }
  })
}

const initialState = {
  isMenuOpen: false,
  navHeight: renderedNavHeight,
  window: windowEl // This is probably a bad idea, but it feels so right
}
export const {GlobalStateProvider, useGlobalState} = createGlobalState(initialState)

const LayoutStyled = styled.div`
  padding-top: ${props => props.navHeight}px;
`

const InnerLayout = ({children}) => {
  const [navHeight] = useGlobalState('navHeight')
  const [window] = useGlobalState('window')
  console.log('window:', window)

  return (
    <>
      <GlobalStyle />
      <LayoutStyled id='rappers-delight' navHeight={navHeight}>
        <GridLines />
        <NavBar />
        {children}
      </LayoutStyled>
    </>

  )
}

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={base}>
      <GlobalStateProvider>
        <InnerLayout>
          {children}
        </InnerLayout>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default Layout
