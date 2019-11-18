import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {Wrapper as Banner1Wrapper, Container as Banner1Container, SubHeading, H1, Button} from '../elements'
import {darkWatermelly, transition, darkBase, media} from '../utilities/styles'

const Wrapper = styled(Banner1Wrapper)`
  /* margin-bottom: 18px; */
`

const Container = styled(Banner1Container)`
  /* margin-bottom: 18px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${media.medium`
    align-items: flex-start;
    text-align: normal;
  `}
`

const BannerButton = styled(Button)`
  margin-top: 30px;
`

const PineappleDudeWrap = styled.div`
  display: none;
  position: absolute;
  top: -60px;
  left: calc(100% - 172px);
  height: calc(100% + 78px);
  width: 100vw;
  ${transition({})};

  ${media.medium`
    display: block;
  `}
`

const PineappleDude = styled(Img)`
  position: absolute !important;
  bottom: 0;
`

const Banner1 = (props) => {
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

  const {PineappleDudeImg} = useStaticQuery(graphql`
    query PineappleDudeQuery {
      PineappleDudeImg: file(relativePath: { eq: "pineappledude.png" }) {
        childImageSharp {
          fixed(width: 323, height: 616) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
      <PineappleDudeWrap>
        <PineappleDude fixed={PineappleDudeImg.childImageSharp.fixed} />
      </PineappleDudeWrap>
    </Wrapper>
  )
}

export default Banner1

export const Banner1Fragment = graphql`
  fragment Banner1Fragment on SanityBanner1 {
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
