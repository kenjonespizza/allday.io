import {createGlobalStyle} from 'styled-components'
import styledNormalize from 'styled-normalize'
import {rgba, getContrast} from 'polished'

import {getContrastTextColor} from '../helpers'
import {base, darkPulp, lightWatermelly, colorsList, media, mqs} from './'
import {transition} from './transition'
import {H1css, H2css, H3css, H4css, H5css, H6css} from '../../elements/Heading'

export const GlobalStyle = createGlobalStyle`


  ${styledNormalize}

  html, body {
    ${mqs({
      property: 'font-size',
      valueBase: `${base.fontSizes.baseSmall}`,
      valueM: `${base.fontSizes.baseMedium}`,
      valueL: `${base.fontSizes.baseLarge}`,
      valueXL: `${base.fontSizes.base}`
    })};
  }

  html {
    /* background: red; */
    box-sizing: border-box;
    color: ${props => props.theme.colors.text};
    font-family: ${base.fonts.body};
  }

  /* * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  } */

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: ${base.lineHeights.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* a, a * { */
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.accent};
    color: ${props => getContrast(props.theme.colors.accent, props.theme.colors.background) < 2 ? props.theme.colors.accent : props.theme.colors.text};
    ${transition({})};
  }
/* 
  h2 {
    font-size: 40px;

    ${media.medium`
      font-size: 45px;
    `}

    ${media.large`
      font-size: 50px;
    `}
  }

  h3 {
    font-size: 30px;

    ${media.medium`
      font-size: 35px;
    `}

    ${media.large`
      font-size: 40px;
    `}
  } */

  h1 {
    ${H1css}
  }
  h2 {
    ${H2css}
  }
  h3 {
    ${H3css}
  }
  h4 {
    ${H4css}
  }
  h5 {
    ${H5css}
  }
  h6 {
    ${H6css}
  }

  h4 {
    margin-bottom: ${base.spacings.base}px;
    margin-bottom: 200px;
  }

  button {
    ${transition({})};
  }

  table {
    width: 90%;
    border-spacing: 0;
  }
  table tr td {
    text-align: center;
    padding: 0;
  }
  table.striped tr:nth-child(even) {background: #f0f0f0}

  .auth0-lock.auth0-lock.auth0-lock-with-tabs .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock .auth0-lock-overlay { background: none; }
  .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget {box-shadow: 0 0 40px 4px #969696 !important}

  ::-moz-selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentHover};
  }
  ::selection {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.accentHover};
  }

  p, li {
    line-height: ${base.lineHeights.body};
  }

  ul {
    list-style-type: square;
  }

  {${Object.keys(colorsList).map(function (color) {
    return '.color-' + color + ' {fill:' + colorsList[color] + ';}'
  }).join('')}

  svg .pulp {
    fill: ${base.colors.pulp};
  }

  i {display: none !important}

  .vid-close-icon {
    fill: ${base.colors.white};
    /* width: 60px;
    height:60px; */
  }

  .blockContent {
    ul, ol {
      padding-left: 15px;
    }

    ol {
      list-style: none;
      counter-reset: item;

      li {
        counter-increment: item;
        display: flex;
      }
      li:before {
        content: counter(item)". ";
        font-weight: ${base.fontWeights.bold};
        text-align: left;
        width: 30px;
        padding-right: 10px;
        display: block;
      }
    }
  }
`
