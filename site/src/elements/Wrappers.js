import React from 'react'
import styled, {css, ThemeProvider} from 'styled-components'

import {GridLines} from './'
import {base, media} from '../utilities/styles'

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  position: relative;
  overflow: hidden;


  ${({hasGrid}) => hasGrid && `
    background-color: transparent;
  `}
  
  ${({addSpace}) => addSpace && `
    margin-top: ${base.spacing.sectionS};

    ${media.medium`
      margin-top: ${base.spacing.sectionM};
    `}
  `}

  p {
    color: ${props => props.theme.colors.text}
  }
`

export const Wrapper = ({theme, hasGrid, addSpace, children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper hasGrid={hasGrid} addSpace={addSpace}>
        {hasGrid && <GridLines />}
        {children}
      </StyledWrapper>
    </ThemeProvider>
  )
}
