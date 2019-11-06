import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import {mqs, base} from '../utilities/styles'
import {H1, SubHeading as StyledSubHeading} from './'

const StlyedHeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({left}) => left && `
    align-items: flex-start
  `}

  & > * {
    text-align: center;
  }

  ${mqs({
    property: 'margin-bottom',
    valueBase: base.spacings.sectionS / 2 + 'px',
    valueM: base.spacings.sectionM / 2 + 'px',
    valueL: base.spacings.sectionL / 2 + 'px'
  })};
`

const SubHeading = styled(StyledSubHeading)`
  margin-bottom: 10px;
`

export const HeadingBlock = ({children, left, data, className}) => {
  if (data && (data.heading || data.subHeading)) {
    const {heading, subHeading} = data

    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left} className={className}>
        {subHeading && (
          <SubHeading>
            {subHeading}
          </SubHeading>
        )}
        {heading && (
          <H1 as='h2'>
            {heading}
          </H1>
        )}
      </StlyedHeadingBlock>
    )
  } else {
    return (
      <StlyedHeadingBlock id='HeadingBlock' left={left} className={className}>
        {children}
      </StlyedHeadingBlock>
    )
  }
}

export const Banner1Fragment = graphql`
  fragment HeadingBlock on SanityHeadingBlock {
    _key
    _type
    heading
    subHeading
  }
`
