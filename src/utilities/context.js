import React, {createContext} from 'react'
import {base, darkBase} from '../utilities/styles'

const BrandThemeContext = createContext({overrideTheme: false, light: base, dark: darkBase})

export {BrandThemeContext}
