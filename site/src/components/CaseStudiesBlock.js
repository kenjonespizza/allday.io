import React, {useEffect, useState} from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'

const CaseStudiesBlock = ({data}) => {
  console.log('data:', data)
  const {heading, button, caseStudies} = data
  return (
    <Wrapper hasGrid theme={darkPulp} addSpace>
      {(heading.subHeading || heading.heading) &&
      <HeadingBlock>
        <SubHeading>
          {heading.subHeading && heading.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {heading.heading && heading.heading}
        </H1>
      </HeadingBlock>
      }

      {caseStudies.map(caseStudy => (
        <div key={caseStudy._id}>{caseStudy.name} - {caseStudy.title}</div>
      ))}

      <ButtonBlock>
        <Button {...button} />
      </ButtonBlock>
    </Wrapper>
  )
}

export default CaseStudiesBlock
