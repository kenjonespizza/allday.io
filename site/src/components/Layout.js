import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {createGlobalState} from 'react-hooks-global-state'

import {GlobalStyle, base} from '../utilities/styles'
import NavBar from './NavBar'

const initialState = {count: 0}
export const {GlobalStateProvider, useGlobalState} = createGlobalState(initialState)

const LayoutStyled = styled.div`
  /* background-color: ${props => props.theme.colors.background}; */
`

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={base}>
      <GlobalStateProvider>
        <GlobalStyle />
        <LayoutStyled id='rappers-delight'>
          <NavBar />
          {children}
        </LayoutStyled>
      </GlobalStateProvider>
    </ThemeProvider>
  )
}

export default Layout
