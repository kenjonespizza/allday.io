import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {GlobalStyle, base, darkYellow} from '../utilities/styles'
import NavBar from './NavBar';

const LayoutStyled = styled.div`
  /* background-color: ${props => props.theme.colors.background}; */
`

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={base}>
      <>
        <GlobalStyle />
        <LayoutStyled id="rappers-delight">
          <NavBar />
          {children}
        </LayoutStyled>
      </>
    </ThemeProvider>
  )
}

export default Layout
