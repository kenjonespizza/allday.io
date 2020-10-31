import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {Link} from 'gatsby'
import {size, rgba} from 'polished'

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
  padding: 0px 0 0 10px;
  font-size: 20px;
  font-weight: ${base.fontWeights.bold};
  color: ${base.colors.black};

  ${({white}) => white && `
    color: ${base.colors.white};
  `}

  ${media.medium`
    padding: 0 0 0 30px;
    font-size: 32px;
    line-height: 1.5;
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
    padding-bottom: 50%;
    
    ${media.medium`
    padding-bottom: 100%;
  `}
  }

  
`

const ServiceBoxInner = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${transition({})};
  text-decoration: none !important;


  &:hover {
    background-color: ${props => props.theme.colors.accent};

    ${Number}, ${Name} {
      color: ${props => props.theme.colors.onAccent};
    }
  }

  ${media.medium`
    padding: ${base.spacings.base}px;
  `}
`

const BoxImg = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    ${size('100%', '100%')};
    background-color: ${rgba(base.colors.black, 0.4)};
  }
`

const BoxInfo = ({name, slug, iteration, numberIsWhite}) => {
  return (
    <ServiceBoxInner to={`/${slug.current}`}>
      <Number white={!!numberIsWhite}>{iteration}</Number>
      <Name white={!!numberIsWhite}>
        {name}
      </Name>
    </ServiceBoxInner>
  )
}

const ServiceBox = ({pageInfo, sampleImage, iteration}) => {
  if (pageInfo) {
    var {pageName, slug} = pageInfo
  }
  const isEven = iteration % 2 === 0
  const hasImg = !!((sampleImage !== null && sampleImage.asset !== null))

  return (
    <>

      <StyledServiceBox>
        {hasImg &&
          <BoxImg fluid={sampleImage.asset.fluid} alt={pageName} />}
        <BoxInfo name={pageName} numberIsWhite={hasImg} iteration={iteration} slug={slug} />
      </StyledServiceBox>
    </>

  )
}

export default ServiceBox
