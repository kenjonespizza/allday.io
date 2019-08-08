import {keyframes} from 'styled-components'
import {rgba} from 'polished'

import {base} from './'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const bounce = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(50%);
  }
`

export const pulse = keyframes`
  0% {
      box-shadow: 0 0 0 0 rgba(0,0,0, 0);
  }
  20% {
    /* box-shadow: 0 0 0 0 rgba(0,0,0, 0.4); */
    /* box-shadow: 0 0 0 0 ${rgba(base.colors.watermelly, 0.5)}; */
    box-shadow: 0 0 0 0;
  }
  50% {
      box-shadow: 0 0 0 7px rgba(0,0,0, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0,0,0, 0);
  }
`

export const linePulse = keyframes`
  0% {
      opacity: .05;
  }
  100% {
    opacity: .1; 
  }
`
