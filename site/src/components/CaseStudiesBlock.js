import React, {useEffect, useState} from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'
import Flickity from 'react-flickity-component'

import {lightWatermelly, darkWatermelly, lightPulp, darkPulp, base, FlicityWrapper, transition, media} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'

const flickityOptions = {
  initialIndex: 1,
  autoPlay: 5000,
  selectedAttraction: 0.04,
  friction: 0.6,
  pageDots: false,
  prevNextButtons: false
  // wrapAround: true
}

const CaseStudyWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 20vw; */
  /* padding: 0 60px; */
  transform: scale(.5);
  opacity: .5;
  ${transition({duration: '.7s'})};
  width: 80vw;
  text-align: center;

  ${media.medium`
    width: 70%;

  `}

  ${media.large`
    width: 50%;

  `}

  ${media.xLarge`
    width: 40%;
  `}

  &.is-selected {
    /* width: 60vw; */
    transform: scale(1);
    opacity: 1;
  }

  .title{ 
    font-size: 40px;
    font-weight: ${base.fontWeights.bold};
    padding-bottom: 30px;
    line-height: 1;
  }

  .project-title {
    font-size: 30px;
    font-weight: ${base.fontWeights.regular};
    font-style: italic;
  }

  .excerpt{
    line-height: 2;
  }
`

const SliderWrapper = styled(FlicityWrapper)`
  margin:  ${base.spacings.sectionS}px 0;

  ${media.medium`
    margin:  ${base.spacings.sectionM}px 0;
  `}
  ${media.large`
    margin:  ${base.spacings.sectionL}px 0;
  `}
`

const CaseStudy = ({name, title, excerpt}) => (
  <CaseStudyWrap>
    <div className='title'>
      {name}&nbsp; - &nbsp;
      <span className='project-title'>
        {title}
      </span>
    </div>
    <p className='excerpt'>
      {excerpt}
    </p>
  </CaseStudyWrap>
)

const CaseStudiesBlock = ({data}) => {
  console.log('data:', data)
  const {heading, button, caseStudies} = data
  if (typeof window !== 'undefined') {
    return (
      <Wrapper hasGrid theme={darkPulp} addSpace>
        {(heading.subHeading || heading.heading) &&
        <HeadingBlock>
          <SubHeading>
            {heading.subHeading && heading.subHeading}
          </SubHeading>
          <H1 as='h2'>
            {heading.heading && heading.heading}
          </H1>
        </HeadingBlock>
        }

        <SliderWrapper>
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {caseStudies.map(caseStudy => (
              <CaseStudy {...caseStudy} />
            ))}
          </Flickity>
        </SliderWrapper>

        <ButtonBlock>
          <Button {...button} />
        </ButtonBlock>
      </Wrapper>
    )
  }
}

export default CaseStudiesBlock
