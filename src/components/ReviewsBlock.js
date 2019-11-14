import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {ThemeProvider} from 'styled-components'

import {base, mqs, media} from '../utilities/styles/'
import {Button, H1, H2, SubHeading, HeadingBlock, ButtonBlock, Wrapper, Container} from '../elements/'

const ReviewsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

const Review = styled.blockquote`
  width: 100%;
  margin: 0;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  margin-bottom: calc(${base.spacings.sectionL}px / 2);
  justify-content: center;

  ${media.large`
    width: 50%;
  `}

  &:nth-child(even) {
    align-self: flex-end;
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    color: ${props => props.theme.colors.text};
    font-weight: ${base.fontWeights.bold};
    ${mqs({
    property: 'font-size',
    valueBase: '20px',
    valueM: '25px',
    valueL: '30px'
  })};
    line-height: 1.5;
    display: flex;
    position: relative;
    padding: 40px 0 0 40px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '"';
      font-family: ${base.fonts.body};
      font-weight: ${base.fontWeights.bold};
      font-style: italic;
      color: ${props => props.theme.colors.accent};
      ${mqs({
    property: 'font-size',
    valueBase: '35px',
    valueM: '45px',
    valueL: '85px'
  })};
    } 
  }

  footer {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: ${base.fontWeights.bold};
    font-size: 17px;

    cite {
      font-weight: ${base.fontWeights.light};
      font-size: 15px;
      font-style: italic;
    }
  }
`

const ReviewsBlock = ({data}) => {
  const {reviews, button} = data

  return (
    <Wrapper hasGrid theme={base} addSpace>
      <ReviewsContainer>

        {/* <blockquote>
            <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
            <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
        </blockquote> */}

        {reviews.map(review => (
          <Review key={review._key}>
            <p>{review.quote}</p>
            <footer>—{review.reviewer}, <cite>{review.company}</cite></footer>
          </Review>
        ))}

        {button && button.text && (button.text !== ' ')(
          <ButtonBlock>
            <Button {...button} />
          </ButtonBlock>
        )}
      </ReviewsContainer>
    </Wrapper>
  )
}

export default ReviewsBlock

export const query = graphql`
  fragment ReviewsBlockFragment on SanityReviewsBlock {
    _key
    _type
    reviews {
      company
      quote
      reviewer
      _key
    }
    button {
      ...ButtonFragment
    }
  }
`
