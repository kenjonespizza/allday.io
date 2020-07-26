import React from 'react'
import styled from 'styled-components'

import {Wrapper, Container} from '../elements/'
import {base, mqs, media} from '../utilities/styles/'

const BannerHelpLocal = ({data}) => {
  return (
    <Wrapper hasGrid theme={base} noSpace>
      <BannerHelpLocalWrap href='https://helplocal.us' target='_blank' rel='noopener noreferrer'>

        <Flex>

          <div>
            <span className='onSmall'>Our COVID-19 response <span aria-label='heart' role='img'>🤍</span></span>
            <span className='onBig'>Find out how we're helping small businesses during this crisis <span aria-label='heart' role='img'>🤍</span></span>
          </div>
          <img src='/images/helplocal-white.svg' alt='HelpLocal.us' />
        </Flex>

      </BannerHelpLocalWrap>
    </Wrapper>
  )
}

export default BannerHelpLocal

const BannerHelpLocalWrap = styled.a`
  background-color: #B63563;
  color: ${props => props.theme.colors.white} !important;
  text-decoration: none !important;
  padding: 15px 0;
  text-align: center;
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  flex-direction: column;

  & > div {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  .onSmall {
      display: block;
    ${media.medium`
      display: none;
    `}
  }

  .onBig {
    display: none;
    ${media.medium`
      display: block;
    `}
  }

  img {
    object-fit: contain;
    height: 25px;
    margin-top: 5px;
  }

  ${media.small`
    justify-content: space-between;
    flex-direction: row;
  `}
`
