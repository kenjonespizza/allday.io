import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'
import ServiceBox from './ServiceBox'

const Services = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${base.spacings.base}px;
  padding: 0;
`

const servicesBlock = () => {
  const data = useStaticQuery(graphql`
    query SERVICES_BLOCK_QUERY {
      services: sanityHomepage {
        servicesHeading {
          heading
          subHeading
        }
        services {
          _id
          name
          slug {
            current
          }
          sampleImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  // const {_key, name, slug, sampleImage} = data.services.nodes
  const {services, servicesHeading} = data.services

  return (
    <Wrapper hasGrid theme={lightWatermelly} addSpace>
      <HeadingBlock>
        <SubHeading>
          {servicesHeading.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {servicesHeading.heading}<span className='accent'>.</span>
        </H1>
      </HeadingBlock>
      <Container>
        <Services>
          {services.map((service, i) => {
            console.log('service:', service)

            return (
              <ServiceBox iteration={i + 1} key={service._id} {...service} />
            )
          })}
        </Services>
      </Container>
      <ButtonBlock>
        <Button to={`/services`}>
          See in more detail.
        </Button>
      </ButtonBlock>
    </Wrapper>
  )
}

export default servicesBlock
