import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby'

import {base, transition, media} from '../utilities/styles'

const Number = styled.span`
  color: ${props => props.theme.colors.accent};
  font-size: 19px;
  font-weight: ${base.fontWeights.bold};

  ${({white}) => white && `
    color: ${base.colors.white};
  `}
`

const Name = styled.span`
  padding: 20px 0 0 30px;
  font-size: 22px;
  font-weight: ${base.fontWeights.bold};
  color: ${base.colors.black};

  ${({white}) => white && `
    color: ${base.colors.white};
  `}

  ${media.medium`
    font-size: 32px;
  `}
`

const StyledServiceBox = styled.li`
  /* background-color: ${props => props.theme.colors.accent}; */
  position: relative;
  background-color: ${base.colors.white};
  box-shadow: ${base.shadows.box};
  list-style: none;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const StyledServiceBoxImg = styled(StyledServiceBox.withComponent(BackgroundImage))`
  color: ${base.colors.white};
  box-shadow: none;

  &:before {
    content: "";
  }

  .filler {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const ServiceBoxInner = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${base.spacings.base}px;
  display: flex;
  flex-direction: column;
  ${transition({})}

  &:hover {
    background-color: ${props => props.theme.colors.accent};

    ${Number}, ${Name} {
      color: ${props => props.theme.colors.onAccent};
    }
  }
`

const BoxImg = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
`

const BoxInfo = ({name, slug, iteration, numberIsWhite}) => (
  <ServiceBoxInner to={`/services/${slug.current}`}>
    <Number white={!!numberIsWhite}>{iteration}</Number>
    <Name white={!!numberIsWhite}>
      {name}
    </Name>
  </ServiceBoxInner>
)

const ServiceBox = ({name, slug, sampleImage, iteration}) => {
  const isEven = iteration % 2 === 0
  const hasImg = !!((sampleImage !== null && sampleImage.asset !== null && !isEven))

  return (
    <>

      <StyledServiceBox >
        {hasImg &&
          <BoxImg fluid={sampleImage.asset.fluid} alt={name} />
        }

        <BoxInfo name={name} numberIsWhite={hasImg} iteration={iteration} slug={slug} />
      </StyledServiceBox>
    </>

  )
}

export default ServiceBox
