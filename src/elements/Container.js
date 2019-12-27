import styled from 'styled-components'

import {base} from '../utilities/styles'

export const Container = styled.div`
  max-width: ${1200 + (base.spacings.base * 2)}px;
  margin: 0 auto;
  padding-left: ${base.spacings.base}px;
  padding-right: ${base.spacings.base}px;
`
