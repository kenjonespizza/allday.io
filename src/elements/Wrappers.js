import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'
import {rgba} from 'polished'

import {GridLines} from './'
import {base, media} from '../utilities/styles'

const StyledWrapper = styled.section`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  overflow: auto;
  padding-top: ${base.spacings.sectionS}px;
  padding-bottom: ${base.spacings.sectionS}px;
  z-index: 2;

  ${({zIndex}) => zIndex && `
    z-index: ${zIndex};
  `}

  ${({extraSpace}) => extraSpace && `
    padding-top: calc(${base.spacings.sectionS}px + 50px);
    padding-bottom: calc(${base.spacings.sectionS}px + 50px);
  `}
  
  ${({halfSpace}) => halfSpace && `
    padding-top: calc(${base.spacings.sectionS}px / 2);
    padding-bottom: calc(${base.spacings.sectionS}px / 2);
  `}

  ${media.medium`
    padding-top: ${base.spacings.sectionM}px;
    padding-bottom: ${base.spacings.sectionM}px;

    ${({extraSpace}) => extraSpace && `
      padding-top: calc(${base.spacings.sectionM}px + 50px);
      padding-bottom: calc(${base.spacings.sectionM}px + 50px);
    `}
    
    ${({halfSpace}) => halfSpace && `
      padding-top: calc(${base.spacings.sectionM}px / 2);
      padding-bottom: calc(${base.spacings.sectionM}px / 2);
    `}
  `}
  
  ${media.large`
    padding-top: ${base.spacings.sectionL}px;
    padding-bottom: ${base.spacings.sectionL}px;

    ${({extraSpace}) => extraSpace && `
      padding-top: calc(${base.spacings.sectionL}px + 50px);
      padding-bottom: calc(${base.spacings.sectionL}px + 50px);
    `}
    
    ${({halfSpace}) => halfSpace && `
      padding-top: calc(${base.spacings.sectionL}px / 2);
      padding-bottom: calc(${base.spacings.sectionL}px / 2);
    `}
  `}

  ${({hasGrid}) => hasGrid && `
    background-color: transparent;
  `}
  
  ${({noSpace}) => noSpace && `
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  `}

  ${({noSpaceBottom}) => noSpaceBottom && `
    padding-bottom: 0 !important;
  `}

  ${({noSpaceTop}) => noSpaceTop && `
    padding-top: 0 !important;
  `}

  

  p {
    /* color: ${props => props.theme.colors.text}; */
    color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 0.7)};

    strong {
      color: ${props => props.theme.colors.text && rgba(props.theme.colors.text, 1)};
    }
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

const StyledWrapperComponent = (props) => {
  const {theme, hasGrid, extraSpace, noSpace, children, className, backgroundColor, lineColor, halfSpace} = props
  return (
    <StyledWrapper {...props}>
      {hasGrid && <GridLines backgroundColor={backgroundColor} lineColor={lineColor} />}
      {children}
    </StyledWrapper>
  )
}

export const Wrapper = (props) => {
  const {theme, hasGrid, extraSpace, noSpace, noSpaceBottom, children, className, backgroundColor, lineColor, zIndex, halfSpace} = props
  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        <StyledWrapperComponent {...props} />
      </ThemeProvider>
    )
  } else {
    return (
      <StyledWrapperComponent {...props} />
    )
  }
}
