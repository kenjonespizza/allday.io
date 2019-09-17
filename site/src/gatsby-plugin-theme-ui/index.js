// src/gatsby-plugin-theme-ui/index.js

import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui'
import {base} from '../utilities/styles'

export default {
  ...novelaTheme,
  // initialColorMode: 'dark',
  colors: {
    ...novelaTheme.colors,
    primary: base.colors.black,
    secondary: base.colors.text,
    accent: base.colors.accent,
    grey: base.colors.text,
    background: base.colors.white
  }
}
