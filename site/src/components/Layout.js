import React, {useEffect} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {createGlobalState} from 'react-hooks-global-state'

import {GlobalStyle, base} from '../utilities/styles'
import NavBar from './NavBar'
import {reColorPunctuation} from '../utilities/helpers'

const initialState = {
  isMenuOpen: false
}
export const {GlobalStateProvider, useGlobalState} = createGlobalState(initialState)

const LayoutStyled = styled.div`
  padding-top: 124px;
`

const InnerLayout = ({children}) => {
  useEffect(() => {
    reColorPunctuation()
  })

  return (
    <>
      <GlobalStyle />
      <LayoutStyled id='rappers-delight'>
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
