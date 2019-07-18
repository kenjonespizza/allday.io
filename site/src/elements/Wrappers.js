import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'

import {GridLines} from './'

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  overflow: hidden;

  ${({ hasGrid }) => hasGrid && `
    background-color: transparent;
  `}

  p {
    color: ${props => props.theme.colors.text}
  }
`;

export const Wrapper = ({theme, hasGrid, children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper hasGrid={hasGrid}>
        {hasGrid && <GridLines />}
        {children}
      </StyledWrapper>
    </ThemeProvider>
  )
}