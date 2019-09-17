// these sizes are arbitrary and you can set them to whatever you wish
import {css} from 'styled-components'

import {base} from './theme'

// iterate through the sizes and create a media template
export const media = Object.keys(base.sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = base.sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

/*  Useage:
${mqs({
  property: 'background-color',
  valueBase: 'red',
  valueM: 'green',
  valueL: 'blue',
  valueXL: 'tomato'
})};
*/
export const mqs = ({
  property = '',
  valueBase = '',
  valueM = '',
  valueL = '',
  valueXL = ''
}) => {
  return css`
    ${property}: ${valueBase};
    ${valueM ? media.medium`
      ${property}: ${valueM};
      /* background-color: PeachPuff; */
    ` : ''}

    ${valueL ? media.large`
      ${property}: ${valueL};
      /* background-color: skyBlue; */
    ` : ''}

    ${valueXL ? media.xLarge`
      ${property}: ${valueXL};
      /* background-color: tomato; */
    ` : ''}
  `
}
