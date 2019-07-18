import {darken, lighten} from 'polished'

const black = '#02161E';
const white = '#FEFEFE';
const seal = '#00B4BF';
const watermelly = '#E84A5F';
const pulp = '#FFDE67';
const aloe = '#00D98B';

const accentHover = (color, ammount = 0.1, makeDarker=true) => {
  return (makeDarker === true ? darken(ammount, color) : lighten(ammount, color)) 
}

export const base = {
  colors: {
    text: black,
    background: white,
    accent: seal,
    accentHover: accentHover(seal),
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe,
  },
  lines: black,
  fonts: {
    body: 'fantasy, sans-serif',
    heading: 'fantasy, serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    light: 100,
    regular: 400,
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
    xLarge: 1200,
    large: 992,
    medium: 768,
    small: 480
  }
}

const darkYellowTheme = {
  colors: {
    text: white,
    background: black,
    accent: pulp,
  },
  colors: {
    text: white,
    background: black,
    accent: pulp,
    accentHover: accentHover(pulp, .1),
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe,
  },
  lines: white,
}

const whiteRedTheme = {
  colors: {
    text: black,
    background: white,
    accent: watermelly,
    accentHover: accentHover(watermelly),
    black: black,
    white: white,
    seal: seal,
    watermelly: watermelly,
    pulp: pulp,
    aloe: aloe,
  },
  lines: black,
}

export const darkYellow = {...base, ...darkYellowTheme}

export const whiteRed = {...base, ...whiteRedTheme}
