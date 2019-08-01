import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'

const CaseStudiesBlock = () => {
  // const data = useStaticQuery(graphql`
  //   query CASESTUDIES_BLOCK_QUERY {
  //     caseStudies: sanityHomepage {
  //       caseStudiesHeading {
  //         heading
  //         subHeading
  //       }
  //     }
  //   }
  // `)

  const {caseStudiesHeading} = data.caseStudies

  return (
    <Wrapper hasGrid theme={darkPulp} addSpace>
      {(caseStudiesHeading.subHeading || caseStudiesHeading.heading) &&
      <HeadingBlock>
        <SubHeading>
          {caseStudiesHeading.subHeading && caseStudiesHeading.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {caseStudiesHeading.heading && caseStudiesHeading.heading}
        </H1>
      </HeadingBlock>
      }

      <div>
      HI!
      </div>

      <ButtonBlock>
        <Button to={`/services`}>
          See in more detail.
        </Button>
      </ButtonBlock>
    </Wrapper>
  )
}

export default CaseStudiesBlock
