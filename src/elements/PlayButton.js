import React from 'react'
import styled from 'styled-components'

const PlayButtonWrap = styled.div`
& {
  display: inline-block;
  z-index: 2;
  transform-origin: center;
}
${({center}) => center && `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`}
&.is-play {
  background-color: #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
&.is-play .button-outer-circle {
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
&.is-play .button-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
&.is-play .button-icon .triangle {
  -webkit-animation: fadeIn 4s ease infinite;
          animation: fadeIn 4s ease infinite;
}
&.is-play .button-icon .path {
  stroke-dasharray: 90;
  stroke-dashoffset: 0;
  -webkit-animation: triangleStroke 4s infinite;
          animation: triangleStroke 4s infinite;
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
.has-scale-animation {
  -webkit-animation: smallScale 3s infinite;
          animation: smallScale 3s infinite;
}
.has-delay-short {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
svg {
  fill: ${props => props.theme.colors.accent};

  path {
    stroke: ${props => props.theme.colors.accent};
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes triangleStroke {
  from {
    stroke-dashoffset: 90;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes triangleStroke {
  from {
    stroke-dashoffset: 90;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes smallScale {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes smallScale {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  to {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
    opacity: 0;
  }
}

`

export const PlayButton = ({center, className}) => {
  return (
    <PlayButtonWrap className={`button is-play ${className}`} center={center} href='#'>
      <div className='button-outer-circle has-scale-animation' />
      <div className='button-outer-circle has-scale-animation has-delay-short' />
      <div className='button-icon is-play'>
        <svg height='100%' width='100%'>
          <polygon className='triangle' points='5,0 30,15 5,30' viewBox='0 0 30 15' />
          <path className='path' d='M5,0 L30,15 L5,30z' fill='none' strokeWidth='1' />
        </svg>
      </div>
    </PlayButtonWrap>
  )
}

// Credit where credit is due https://codepen.io/arturoalviar/pen/YEgdLP
