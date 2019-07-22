import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {centerIt, lightWatermelly, base} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, Wrapper} from '../elements/'

const servicesBlock = () => {
  const data = useStaticQuery(graphql`
    query SERVICES_BLOCK_QUERY {
      sanityHomepage {
        hero {
          button {
            buttonIcon
            buttonText
            slug {
              current
            }
            url
          }
          mainText
          imageRight {
            alt
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          imageLeft {
            alt
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log('data:', data)
  const {mainText, button, imageRight, imageLeft} = data.sanityHomepage.hero

  return (
    <Wrapper hasGrid theme={lightWatermelly} addSpace>
      <HeadingBlock>
        <SubHeading>
          how we can
        </SubHeading>
        <H1 as='h2'>
          Assist You<span className='accent'>.</span>
        </H1>
      </HeadingBlock>
    </Wrapper>
  )
}

export default servicesBlock
