import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'
import {rgba} from 'polished'

import {GridLines} from './'
import {base, media} from '../utilities/styles'

const StyledWrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  /* overflow: hidden; */
  padding-top: ${base.spacings.sectionS}px;
  padding-bottom: ${base.spacings.sectionS}px;

  ${({extraSpace}) => extraSpace && `
    padding-top: calc(${base.spacings.sectionS}px + 50px);
    padding-bottom: calc(${base.spacings.sectionS}px + 50px);
  `}

  ${media.medium`
    padding-top: ${base.spacings.sectionM}px;
    padding-bottom: ${base.spacings.sectionM}px;

    ${({extraSpace}) => extraSpace && `
      padding-top: calc(${base.spacings.sectionM}px + 50px);
      padding-bottom: calc(${base.spacings.sectionM}px + 50px);
    `}
  `}
  
  ${media.large`
    padding-top: ${base.spacings.sectionL}px;
    padding-bottom: ${base.spacings.sectionL}px;

    ${({extraSpace}) => extraSpace && `
      padding-top: calc(${base.spacings.sectionL}px + 50px);
      padding-bottom: calc(${base.spacings.sectionL}px + 50px);
    `}
  `}

  ${({hasGrid}) => hasGrid && `
    background-color: transparent;
  `}
  
  ${({noSpace}) => noSpace && `
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  `}

  

  p {
    /* color: ${props => props.theme.colors.text}; */
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};
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

export const Wrapper = ({theme, hasGrid, extraSpace, noSpace, children, className}) => {
  return (
    <ThemeProvider theme={theme} >
      <StyledWrapper hasGrid={hasGrid} noSpace={noSpace} extraSpace={extraSpace} className={className}>
        {hasGrid && <GridLines />}
        {children}
      </StyledWrapper>
    </ThemeProvider>
  )
}
