import React from 'react'
import styled from 'styled-components'

import {mqs, base} from '../utilities/styles'
import {H1, SubHeading} from './'

const StlyedHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({left}) => left && `
    align-items: flex-start
  `}

  ${mqs({
    property: 'margin-bottom',
    valueBase: base.spacings.sectionS / 2 + 'px',
    valueM: base.spacings.sectionM / 2 + 'px',
    valueL: base.spacings.sectionL / 2 + 'px'
  })};
`

export const HeadingBlock = ({children, left, data}) => {
  // console.log('data:', data)
  if (data && data.heading && data.subHeading) {
    const {heading, subHeading} = data
    console.log('heading:', heading)
    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left}>
        <SubHeading>
          {subHeading && subHeading}
        </SubHeading>
        <H1 as='h2'>
          {heading && heading}
        </H1>
      </StlyedHeadingBlock>
    )
  } else {
    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left}>
        {children}
      </StlyedHeadingBlock>
    )
  }
}
