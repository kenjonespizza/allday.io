import React from 'react'
import styled from 'styled-components'

import {base, media, transition} from '../utilities/styles'

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
    font-size: 20px;
    font-weight: ${base.fontWeights.bold};
    padding-bottom: 30px;
    line-height: 1;

    ${media.medium`
      font-size: 30px;
    `}

    ${media.large`
      font-size: 40px;

    `}
  }

  .project-title {
    font-size: 16px;
    font-weight: ${base.fontWeights.regular};
    font-style: italic;

    ${media.medium`
      font-size: 20px;
    `}

    ${media.large`
      font-size: 30px;
    `}
  }

  .excerpt{
    line-height: 2;
  }
`

const CaseStudyBox = ({pageInfo, title, excerpt}) => (
  <CaseStudyWrap>
    <div className='title'>
      {pageInfo.pageName}&nbsp; - &nbsp;
      <span className='project-title'>
        {title}
      </span>
    </div>
    <p className='excerpt'>
      {excerpt}
    </p>
  </CaseStudyWrap>
)

export default CaseStudyBox
