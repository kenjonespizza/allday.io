import React from 'react'
import styled, {withTheme} from 'styled-components'
import {getContrast, rgba, invert} from 'polished'
import {Link} from 'gatsby'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base, darkBase, media, transition} from '../utilities/styles/'
import {Button as OriginalButton, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper as CaseStudyWrapper, Container as CaseStudyContainer} from '../elements/'
import ServiceBox from './ServiceBox'

const Wrap = styled(CaseStudyWrapper)`
  display: grid;
  grid-template-columns: 1fr;
  
  ${media.xLarge`
    grid-template-columns: 1fr 1fr;
    grid-gap: ${base.spacings.base}px;
  `}
`

const Button = styled(OriginalButton)`
  background-color: transparent;
  border: solid 2px ${base.colors.black};
  color: ${base.colors.black};
  z-index: 3;
  position: relative;

  &:hover {
    background-color: transparent !important;
    border-color: ${props => props.textColor} !important;
    color: ${props => props.textColor} !important;
  }
`

const Wrapper = styled(CaseStudyWrapper)`
position: relative;
background: transparent;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    /* right: calc(100% - 20px); */
    right: auto;
    left: 0;
    height: 100%;
    width: 20px;
    background-color: ${props => props.bg};
    ${transition({duration: '.1s', delay: '.5s'})};
    /* z-index: -1; */

    /* ${media.xxLarge`
      width: 50px;
    `} */
  }

  &:before {
    content: "";
    background-color: ${props => props.bg};
    width: 0;
    top: 0;
    height: 100%;
    position: absolute;
    right: 0;
    left: auto;
    ${transition({duration: '.5s'})};
  }

  * {
    ${transition({})};
  }

  &:hover {
    &:after {
      width: 0;
      ${transition({duration: '.5s', delay: '0s'})};
    }
    &:before {
      width: 100%;
      left: 0;
    }

     span, p {
      /* color: #fff !important; */
      color: ${props => props.textColor && rgba(props.textColor, 0.8)};
    }

    h1, h2, h3 {
      color: ${props => props.textColor};
    }

    ${Button} {
      border-color: ${props => props.textColor};
      background-color: ${props => props.textColor};
      color: ${props => props.bg};
    }
  }

  *::-moz-selection {
    background-color: ${props => props.bg};
    color: ${props => props.textColor};
  }
  *::selection {
    background-color: ${props => props.bg};
    color: ${props => props.textColor};
  }
`

const Block = styled.section`
  position: relative;
`

const OverlayLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`

const Container = styled(CaseStudyContainer)`
  padding-left: calc(${base.spacings.base}px + 20px);
  padding-right: calc(${base.spacings.base}px + 20px);
`

const CaseStudiesBlockRows = ({data, rawData}) => {
  const {caseStudies, headingBlock, isDark} = data

  return (
    <>
      {headingBlock && (headingBlock.heading || headingBlock.subHeading) && (
        <Wrapper theme={isDark ? darkBase : base} noSpaceBottom hasGrid>
          <HeadingBlock {...headingBlock} />
        </Wrapper>
      )}
      <Wrap theme={isDark ? darkBase : base} hasGrid noSpace>
        {caseStudies && caseStudies.map((caseStudy, i) => {
          const hex = caseStudy.color && caseStudy.color.hex ? caseStudy.color.hex : base.colors.black
          const textColor = getContrast(hex, base.colors.white) > 2 ? base.colors.white : base.colors.black
          return (
            <Wrapper key={caseStudy._id + i} theme={isDark ? darkBase : base} bg={hex} textColor={textColor}>
              <OverlayLink to={`/work-samples/${caseStudy.pageInfo.slug.current}`} />
              <Block>

                <Container>
                  <H1 as='h2'>{caseStudy.pageInfo.pageName}</H1>
                  <SubHeading>{caseStudy.title}</SubHeading>
                  <p>{caseStudy.excerpt}</p>

                  <Button slug={caseStudy.pageInfo.slug} slugPrefix='/work-samples' color={hex} textColor={textColor}>
                    View Project Details
                  </Button>

                </Container>

              </Block>

            </Wrapper>
          )
        })}

      </Wrap>
    </>
  )
}

export default withTheme(CaseStudiesBlockRows)

// Graphql fragment for this is defined in /src/components/CaseStudiesBlockBlocks.js
