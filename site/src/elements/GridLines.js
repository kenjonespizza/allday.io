import React from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import {linePulse} from '../utilities/styles'

const lineOpacity = 0.05

const StyledGridWrap = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  ${({backgroundColor}) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
`

const StyledGrid = styled.div`
  /* animation: ${linePulse} 5s infinite alternate; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  /* background-color: ${props => props.theme.colors.background}; */
  z-index: -1;
  /* opacity: lineOpacity; */


  > div {
    height: 100%;
    border-left: ${props => props.theme.colors.lines && rgba(props.theme.colors.lines, lineOpacity)} solid 1px;
    
    &:last-of-type {
    width: calc(100% - 1px);
    border-right: ${props => props.theme.colors.lines && rgba(props.theme.colors.lines, lineOpacity)} solid 1px;

    ${({lineColor}) => lineColor && `
      border-color: ${rgba(lineColor, lineOpacity)};
    `}
    }
    
    ${({lineColor}) => lineColor && `
      border-color: ${rgba(lineColor, lineOpacity)};
    `}
    
  }
`

export const GridLines = ({backgroundColor, lineColor}) => {
  return (
    <StyledGridWrap backgroundColor={backgroundColor}>
      <StyledGrid lineColor={lineColor}>
        <div />
        <div />
        <div />
        <div />
      </StyledGrid>
    </StyledGridWrap>
  )
}
