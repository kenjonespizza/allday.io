// src/gatsby-plugin-theme-ui/index.js

import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui'
import {base, darkBase, darkPulp, darkWatermelly} from '../utilities/styles'

const colors = {
  ...novelaTheme,
  // initialColorMode: 'dark',
  colors: {
    ...novelaTheme.colors,
    primary: base.colors.black,
    secondary: base.colors.text,
    accent: base.colors.accent,
    grey: base.colors.text,
    background: base.colors.background,
    hover: 'rgba(0, 0, 0, 0.07)',
    gradient: '',
    articleText: base.colors.text,
    track: 'rgba(8, 8, 11, 0.3)',
    progress: base.colors.accent,
    card: base.colors.background,
    error: base.colors.watermelly,
    success: base.colors.aloe,
    errorBackground: 'rgba(238, 86, 91, 0.1)',
    horizontalRule: 'rgba(8, 8, 11, 0.15)',
    inputBackground: 'rgba(0, 0, 0, 0.05)',
    modes: {
      dark: {
        grey: '#73737D',
        primary: darkBase.colors.white,
        secondary: darkBase.colors.white,
        accent: darkBase.colors.accent,
        background: darkBase.colors.background,
        hover: darkBase.colors.accentHoverText,
        gradient:
        '',
        articleText: darkBase.colors.text,
        track: 'rgba(255, 255, 255, 0.3)',
        progress: darkBase.colors.accent,
        card: '#1D2128',
        error: darkBase.colors.watermelly,
        success: darkBase.colors.aloe,
        errorBackground: 'rgba(238, 86, 91, 0.1)',
        horizontalRule: 'rgba(255, 255, 255, 0.15)',
        inputBackground: 'rgba(255, 255, 255, 0.07)'
      }
    }
  }
}

// console.log('colors:', colors)

export default colors
