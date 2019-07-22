import React from 'react'
import styled from 'styled-components'

const StlyedHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeadingBlock = ({children}) => (
  <StlyedHeadingBlock>
    {children}
  </StlyedHeadingBlock>
)
