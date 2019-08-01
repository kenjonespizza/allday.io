import React from 'react'
import styled from 'styled-components'

import {mqs, base} from '../utilities/styles'

const StlyedHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mqs({
    property: 'margin-bottom',
    valueBase: base.spacings.sectionS / 2 + 'px',
    valueM: base.spacings.sectionM / 2 + 'px',
    valueL: base.spacings.sectionL / 2 + 'px'
  })};
`

export const HeadingBlock = ({children}) => (
  <StlyedHeadingBlock id='HeadingBlock'>
    {children}
  </StlyedHeadingBlock>
)
