import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {base, media, transition} from '../utilities/styles'
import {Button} from '../elements'

const CaseStudyWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 20vw; */
  /* padding: 0 60px; */
  transform: scale(.5) translateY(-50%);
  top: 0;
  transform-origin: center center;
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
    transform: scale(1) translateY(-50%);
    opacity: 1;
    top: 50%;
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

const BoxLink = styled(Button)`
  color: ${props => props.theme.colors.accent};
  background: none;

  i {
    color: ${props => props.theme.colors.accent};
  }

  &:hover {
    background: none;
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }

  &:hover i {
    color: ${props => props.theme.colors.accent};
  }
`

const CaseStudyBox = ({pageInfo, title, excerpt}) => {
  const button = {
    text: 'View Case Study',
    icon: 'fas fa-chevron-right',
    slug: pageInfo.slug,
    slugPrefix: '/'
  }

  return (
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
      <BoxLink {...button} />
    </CaseStudyWrap>
  )
}

export default CaseStudyBox
