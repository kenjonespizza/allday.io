import React from 'react'
import styled from 'styled-components'

import {mqs, base} from '../utilities/styles'

const StlyeButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({left}) => left && `
    align-items: flex-start
  `}

  ${mqs({
    property: 'margin-top',
    valueBase: base.spacings.sectionS + 'px',
    valueM: base.spacings.sectionM + 'px',
    valueL: base.spacings.sectionL + 'px'
  })};
`

export const ButtonBlock = ({children, left}) => (
  <StlyeButtonBlock left={left}>
    {children}
  </StlyeButtonBlock>
)
