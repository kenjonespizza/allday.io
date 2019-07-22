// these sizes are arbitrary and you can set them to whatever you wish
import {css} from 'styled-components'

import {base} from './theme'

// iterate through the sizes and create a media template
export const media = Object.keys(base.sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = base.sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
