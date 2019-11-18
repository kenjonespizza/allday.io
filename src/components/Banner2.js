import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Wrapper as Banner2Wrapper, Container as Banner2Container, SubHeading, H1, Button} from '../elements'
import {darkWatermelly, transition, darkBase, media} from '../utilities/styles'

const Wrapper = styled(Banner2Wrapper)`
  /* margin-bottom: 18px; */
  text-align: center;

`

const Container = styled(Banner2Container)`
  /* margin-bottom: 18px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BannerButton = styled(Button)`
  margin-top: 30px;
`

const Banner2 = (props) => {
  const {headingBlock, description, button} = props.data
  const {brandTheme} = props

  // If there is a specific theme passed in, swap out the accent color.
  var bannerTheme
  if (typeof brandTheme !== 'undefined') {
    bannerTheme = {
      ...darkWatermelly, // copy everything from base
      colors: {// override the colors property
        ...darkWatermelly.colors, // copy the everything from base.colors
        accent: brandTheme.colors.accent // override base.colors.accent
      }
    }
  }

  return (
    <Wrapper theme={typeof bannerTheme !== 'undefined' ? bannerTheme : darkWatermelly} hasGrid addSpace>
      <Container>

        <SubHeading>
          {headingBlock.subHeading && headingBlock.subHeading}
        </SubHeading>
        <H1 as='h2'>
          {headingBlock.heading && headingBlock.heading}
        </H1>

        <p>{description}</p>
        <BannerButton {...button} />
      </Container>
    </Wrapper>
  )
}

export default Banner2

export const Banner2Fragment = graphql`
  fragment Banner2Fragment on SanityBanner2 {
    _key
    _type
    button {
      ...ButtonFragment
    }
    description
    headingBlock {
      heading
      subHeading
    }
  }
`
