import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'

import {GridLines} from './'
import {base, media} from '../utilities/styles'

const StyledWrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  overflow: hidden;
  padding-top: ${base.spacings.sectionS}px;
  padding-bottom: ${base.spacings.sectionS}px;

  ${media.medium`
    padding-top: ${base.spacings.sectionM}px;
    padding-bottom: ${base.spacings.sectionM}px;
  `}
  
  ${media.large`
    padding-top: ${base.spacings.sectionL}px;
    padding-bottom: ${base.spacings.sectionL}px;
  `}

  ${({hasGrid}) => hasGrid && `
    background-color: transparent;
  `}
  
  ${({noSpace}) => noSpace && `
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  `}

  p {
    color: ${props => props.theme.colors.text};
  }

  *::-moz-selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentHover};
  }
  *::selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.onAccent};
  }
`

export const Wrapper = ({theme, hasGrid, noSpace, children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper hasGrid={hasGrid} noSpace={noSpace}>
        {hasGrid && <GridLines />}
        {children}
      </StyledWrapper>
    </ThemeProvider>
  )
}
