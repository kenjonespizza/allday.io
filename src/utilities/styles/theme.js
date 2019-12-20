import {darken, lighten, rgba} from 'polished'

const black = '#02161E'
const white = '#FEFEFE'
const seal = '#00B4BF'
const watermelly = '#E84A5F'
const pulp = '#FFDE67'
const aloe = '#00D98B'
const gatsby = '#663399'
const netlify = '#00AD9F'
const sanity = '#F04A39'
const github = '#333333'
const facebook = '#3b5998'
const twitter = '#1da1f2'
const linkedIn = '#007bb5'
const instagram = '#c32aa3'
const dribbble = '#ea4c89'

export const colorsList = {
  seal: seal,
  watermelly: watermelly,
  pulp: pulp,
  aloe: aloe,
  white: white,
  black: black,
  gatsby: gatsby,
  netlify: netlify,
  sanity: sanity,
  github: github,
  facebook: facebook,
  twitter: twitter,
  linkedIn: linkedIn,
  instagram: instagram,
  dribbble: dribbble
}

export const base = {
  themeName: 'base',
  colors: {
    isDark: false,
    text: black,
    background: white,
    accent: seal,
    accentHover: black,
    accentHoverText: white,
    onAccent: white,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe,
    useSpecial: false
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: {
    baseSmall: '15px',
    baseMedium: '17px',
    baseLarge: '18px',
    base: '19px',
    small: '15px',
    button: '19px',
    buttonIcon: '16px',
    h1: '55px',
    subH1: '19px',
    h2: '32px'
  },
  fontWeights: {
    light: 100,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900
  },
  lineHeights: {
    body: 1.9,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.5em'
  },
  breakpoints: [
    '40em', '56em', '64em'
  ],
  sizes: {
    xxLarge: 1500,
    xLarge: 1200,
    large: 992,
    medium: 768,
    small: 480
  },
  spacings: {
    base: 40,
    sectionS: 50,
    sectionM: 60,
    sectionL: 100
    // heading: 40
    // sectionS: 80,
    // sectionM: 100,
    // sectionL: 150,
    // heading: 40
  },
  shadows: {
    box: `0px 10px 35px ${rgba('black', 0.1)}`
  },
  grid: {
    opacity: 0.045,
    color: black
  }
}

const lightPulpTheme = {
  themeName: 'lightPulpTheme',
  colors: {
    isDark: false,
    text: black,
    background: white,
    accent: pulp,
    accentHover: black,
    accentHoverText: white,
    onAccent: black,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe
  }
}

const darkPulpTheme = {
  themeName: 'darkPulpTheme',
  colors: {
    isDark: true,
    text: white,
    background: black,
    accent: pulp,
    accentHover: white,
    accentHoverText: black,
    onAccent: black,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe
  },
  grid: {
    opacity: 0.1,
    color: white
  }
}

const lightWatermellyTheme = {
  themeName: 'lightWatermellyTheme',
  colors: {
    isDark: false,
    text: black,
    background: white,
    accent: watermelly,
    accentHover: black,
    accentHoverText: white,
    onAccent: white,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe
  }
}

const darkWatermellyTheme = {
  themeName: 'darkWatermellyTheme',
  colors: {
    isDark: true,
    text: white,
    background: black,
    accent: watermelly,
    accentHover: white,
    accentHoverText: watermelly,
    onAccent: white,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe
  },
  grid: {
    opacity: 0.1,
    color: white
  }
}

const darkBaseTheme = {
  themeName: 'darkBaseTheme',
  colors: {
    isDark: true,
    text: white,
    background: black,
    accent: seal,
    accentHover: seal,
    accentHoverText: black,
    onAccent: white,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe
  },
  grid: {
    opacity: 0.1,
    color: white
  }
}

export const lightPulp = {...base, ...lightPulpTheme}
export const darkPulp = {...base, ...darkPulpTheme}
export const lightWatermelly = {...base, ...lightWatermellyTheme}
export const darkWatermelly = {...base, ...darkWatermellyTheme}
export const darkBase = {...base, ...darkBaseTheme}
