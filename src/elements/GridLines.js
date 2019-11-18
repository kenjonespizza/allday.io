import React from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import {linePulse, media, base} from '../utilities/styles'

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

  @media (min-width: 1200px){ 
    width: 100%;
    padding-left: ${base.spacings.base}px;
    padding-right: ${base.spacings.base}px;
  }

  ${({backgroundColor}) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
`

const StyledGrid = styled.div`
  /* animation: ${linePulse} 5s infinite alternate; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: ${base.spacings.base}px 1fr 1fr ${base.spacings.base}px;
  height: 0;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  /* background-color: ${props => props.theme.colors.background}; */
  z-index: -1;
  /* opacity: lineOpacity; */

  @media (min-width: 1200px){ 
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }


  > div {
    height: 100%;
    border-left: ${props => props.theme.grid.color && rgba(props.lineColor ? props.lineColor : props.theme.grid.color, props.theme.grid.opacity)} solid 1px;
    
    &:first-of-type {
      
    }

    &:last-of-type {
    /* width: calc(100% - 1px); */
    transform: translateX(-1px);
    border-right: ${props => props.theme.grid.color && rgba(props.lineColor ? props.lineColor : props.theme.grid.color, props.theme.grid.opacity)} solid 1px;
    width: calc(100% + 1px);

    ${media.xLarge`
        transform: translateX(0);
        width: 100%;
      `}

    }
    
  }
`

export const GridLines = ({backgroundColor, lineColor}) => {
  console.log('lineColorrrrr:', lineColor)
  return (
    <StyledGridWrap backgroundColor={backgroundColor} lineColor={lineColor}>
      <StyledGrid>
        <div />
        <div />
        <div />
        <div />
      </StyledGrid>
    </StyledGridWrap>
  )
}
