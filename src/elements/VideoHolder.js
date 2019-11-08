import React, {useState} from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import PopUpPlayer from './PopUpPlayer'
import {base} from '../utilities/styles'
import {transition} from '../utilities/styles/transition'
import {PlayButton as PlayButtonStyled} from './'

const PlayButton = styled(PlayButtonStyled)`
  transform-origin: center;
  ${transition({})};
`

const Cover = styled.a`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: ${rgba(base.colors.black, 0.5)};

 /* &:hover {
  background-color: ${props => props.theme.colors.accent && rgba(props.theme.colors.accent, 0.5)};
 } */
`

const VideoHolderWrap = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.accent};

  &:hover {
    ${PlayButton} {
      width: 118px;
      height: 118px;
    }

    ${Cover} {
      background-color: ${props => props.theme.colors.accent && rgba(props.theme.colors.accent, 0.5)};
    }
 }
`

export const VideoHolder = ({video, className, children}) => {
  const [isOpen, toggleOpen] = useState(false)
  console.log('isOpen:', isOpen)

  return (
    <VideoHolderWrap onClick={() => toggleOpen(!isOpen)} className={className}>
      <PopUpPlayer video={video} open={isOpen} toggleModal={toggleOpen} />
      {children}
      <Cover />
      <PlayButton center />
    </VideoHolderWrap>
  )
}
