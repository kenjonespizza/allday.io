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
  github: github
}

const accentHover = (color, ammount = 0.1, makeDarker = true) => {
  return (makeDarker === true ? darken(ammount, color) : lighten(ammount, color))
}

export const base = {
  colors: {
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
    lines: black
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: {
    base: '17px',
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
    body: 1.5,
    heading: 1.125
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
    sectionS: 80,
    sectionM: 100,
    sectionL: 150
  },
  shadows: {
    box: `0px 10px 35px ${rgba('black', 0.1)}`
  }
}

const lightPulpTheme = {
  colors: {
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
    aloe: aloe,
    lines: black
  }
}

const darkPulpTheme = {
  colors: {
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
    aloe: aloe,
    lines: white
  }
}

const lightWatermellyTheme = {
  colors: {
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
    aloe: aloe,
    lines: black
  }
}

const darkWatermellyTheme = {
  colors: {
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
    aloe: aloe,
    lines: white
  }
}

const darkBaseTheme = {
  colors: {
    text: white,
    background: black,
    accent: seal,
    accentHover: white,
    accentHoverText: seal,
    onAccent: white,
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe,
    lines: white
  }
}

export const lightPulp = {...base, ...lightPulpTheme}
export const darkPulp = {...base, ...darkPulpTheme}
export const lightWatermelly = {...base, ...lightWatermellyTheme}
export const darkWatermelly = {...base, ...darkWatermellyTheme}
export const darkBase = {...base, ...darkBaseTheme}
