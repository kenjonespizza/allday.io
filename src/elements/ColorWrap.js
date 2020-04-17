import styled from 'styled-components'

export const ColorWrap = styled.div`
/* display: none; */

*::selection {
  background: ${props => props.color} !important; /* WebKit/Blink Browsers */
  color: ${props => props.textColor} !important; /* WebKit/Blink Browsers */
}
*::-moz-selection {
  background: ${props => props.color} !important; /* Gecko Browsers */
  color: ${props => props.textColor} !important; /* Gecko Browsers */
}
`
