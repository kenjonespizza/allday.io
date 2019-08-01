import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby'

import {base, transition} from '../utilities/styles'

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
  font-size: 32px;
  font-weight: ${base.fontWeights.bold};
  color: ${base.colors.black};

  ${({white}) => white && `
    color: ${base.colors.white};
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

  return (
    <>
      {(sampleImage === null || sampleImage.asset === null) || isEven ? (
        <StyledServiceBox>
          <BoxInfo name={name} iteration={iteration} slug={slug} />
        </StyledServiceBox>
      ) : (
        <StyledServiceBoxImg
          Tag='li'
          fluid={sampleImage.asset.fluid}
          backgroundColor={`#040e18`}>
          <BoxInfo name={name} iteration={iteration} numberIsWhite slug={slug} />
        </StyledServiceBoxImg>
      )}
    </>

  )
}

export default ServiceBox
