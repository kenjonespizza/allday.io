import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import {rgba} from 'polished'

import {getContrastTextColor} from '../utilities/helpers'
import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base, darkBase, media, transition} from '../utilities/styles/'
import {Button, H1, H2, H3, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container as CaseStudiesContainer} from '../elements/'

const CaseStudies = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 0;

  ${media.medium`
    grid-gap: ${base.spacings.base}px;
    grid-template-columns: 1fr 1fr;
    
    ${({count}) => (count % 2 !== 0) && `
      & > li:first-child {
        grid-column: span 2;
      }
    `}
  `}
 
  ${media.xLarge`

  li, li:first-child {
    grid-column: span 1;
  }
  
    ${({count}) => (count % 1 === 0) && `
      grid-template-columns: 1fr;
    `}

    ${({count}) => (count % 2 === 0) && `
      grid-template-columns: 1fr 1fr;
    `}

    ${({count}) => (count % 3 === 0) && `
      grid-template-columns: 1fr 1fr 1fr;
    `}

    ${({count}) => (count % 5 === 0) && `
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

      & > li {
        grid-column: span 2;
      }

      & > li:nth-child(1), & > li:nth-child(2) {
        grid-column: span 3;
      }
    `}
  `}

  
`

const Number = styled.span`
  font-size: 17px;
  color: ${props => props.theme.colors.white};
  align-self: flex-end;
  padding: 10px 20px;
  border-radius: 90px;
  border: 2px solid #fff;
  text-align: center;
  line-height: 1.5;
  ${transition({})}
`

const Name = styled.span`
  font-size: 25px;
  font-weight: ${base.fontWeights.bold};
  color: ${base.colors.black};
  line-height: 1.5;

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

  &:before {
    content: "";
    display: block;
    padding-bottom: 75%;

    ${media.xLarge`
      padding-bottom: 100%;
    `}
  }

  &:after {
    content: '';
    position: absolute;
    left: auto;
    right: 0;
    top: 0;
    width: 10px;
    width: 0px;
    height: 100%;
    background-color: ${props => props.color && props.color};
    z-index: 1;
    ${transition({})}
  }

  .bar {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    z-index: 1;
    background-color: ${props => props.color && props.color};
    ${transition({duration: '.2s', delay: '.1s'})};
  }

  &:hover {
    &:after {
      width: 100%;
      right: auto;
      left: 0;
    }

    .bar {
      width: 0;
      ${transition({duration: '.5s', delay: '0s'})};
    }
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
  justify-content: space-between;
  flex-direction: column;
  z-index: 2;
  ${transition({})}

  ${Number}{
    /* border-color: ${props => props.color ? props.color : props.black}; */
  }
  
  ${Name}{
    color: ${props => props.hasimage === 'true' ? props.theme.colors.white : props.black};
    color: ${props => props.hasimage === 'true' ? props.theme.colors.white : props.black};
    text-shadow: ${props => props.hasimage === 'true' ? `0 0 20px ${rgba(base.colors.black, 0.2)}, 0 2px 2px ${rgba(base.colors.black, 0.3)}` : ''};
  }

  &:hover {
    /* background-color: ${props => props.color ? props.color : props.theme.colors.accent}; */

    ${Number}, ${Name} {
      color: ${props => props.textcolor ? props.textcolor : props.theme.colors.onAccent};
    }

    ${Number} {
      border-color: transparent;
      background-color: transparent;
      color: ${props => props.textcolor ? props.textcolor : props.theme.colors.black};
    }}
  }
  /* F7941C */

  ${media.medium`
    padding: ${base.spacings.base}px;
  `}
`

const BoxImg = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${rgba(base.colors.black, 0)}
  }
`

const Container = styled(CaseStudiesContainer)`
  max-width: none;
  padding: 0;

  ${CaseStudies} {
    grid-gap: 0;
  }
`

const CaseStudiesBlockBlocks = ({data, rawData}) => {
  const {caseStudies, headingBlock, isDark, button} = data

  return (
    <Wrapper hasGrid theme={isDark ? darkBase : base} addSpace>
      {headingBlock && (headingBlock.heading || headingBlock.subHeading) && <HeadingBlock {...headingBlock} />}
      <Container>
        <CaseStudies count={caseStudies.length}>
          {caseStudies && caseStudies.map((caseStudy, i) => {
            const textColor = getContrastTextColor(caseStudy.color.hex)
            return (
              <StyledServiceBox key={caseStudy._id} color={caseStudy.color.hex}>
                {caseStudy.projectImage && caseStudy.projectImage.asset && <BoxImg fluid={caseStudy.projectImage.asset.fluid} alt={caseStudy.projectImage.alt || caseStudy.pageInfo.pageName} />}
                <ServiceBoxInner to={`/work-samples/${caseStudy.pageInfo.slug.current}`} color={caseStudy.color.hex} textcolor={textColor} hasimage={(caseStudy.projectImage && caseStudy.projectImage.asset) ? 'true' : 'false'}>
                  <Name>
                    {caseStudy.pageInfo.pageName}
                  </Name>
                  <Number>{caseStudy.title}</Number>
                </ServiceBoxInner>
                <div className='bar' />
              </StyledServiceBox>
            )
          })}
        </CaseStudies>
        {button && (
          <ButtonBlock>
            <Button {...button} />
          </ButtonBlock>
        )}
      </Container>
    </Wrapper>
  )
}

// 0EC69A
// 2A2C57

export default CaseStudiesBlockBlocks
