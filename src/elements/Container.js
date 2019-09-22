import styled from 'styled-components'

import {base} from '../utilities/styles'

export const Container = styled.div`
  max-width: calc(1200px + (${base.spacings.base}px * 2}));
  margin: 0 auto;
  padding-left: ${base.spacings.base}px;
  padding-right: ${base.spacings.base}px;
`
