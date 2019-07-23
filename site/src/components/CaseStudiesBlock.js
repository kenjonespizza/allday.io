import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'

const TestimonialsBlock = () => {
  // const data = useStaticQuery(graphql`
  //   query SERVICES_BLOCK_QUERY {
  //     services: sanityHomepage {
  //       services {
  //         _id
  //         name
  //         slug {
  //           current
  //         }
  //         sampleImage {
  //           asset {
  //             fluid {
  //               ...GatsbySanityImageFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const {_key, name, slug, sampleImage} = data.services.nodes
  // const {services} = data.services

  return (
    <Wrapper hasGrid theme={darkPulp} addSpace>
      <HeadingBlock>
        <SubHeading>
          we do good work
        </SubHeading>
        <H1 as='h2'>
          Good Work<span className='accent'>.</span>
        </H1>
      </HeadingBlock>

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

export default TestimonialsBlock
