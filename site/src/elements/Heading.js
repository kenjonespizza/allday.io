import styled, {css} from 'styled-components'

import {base} from '../utilities/styles'

const H1css = css`
  font-size: 55px;
`
const H2css = css`
  font-size: 28px;
`
const H3css = css`
  font-size: 25px;
`
const H4css = css`
  font-size: 22px;
`
const H5css = css`
  font-size: 21px;
`
const H6css = css`
  font-size: 19px;
`

export const Heading = styled.span`
  color: ${props => props.theme.colors.black};
  font-size: 55px;
  display: block;
  font-family: ${base.fonts.heading};
  font-weight: ${base.fontWeights.bold};
  font-weight: ${props => (props.light ? base.fontWeights.light : '')};
  font-weight: ${props => (props.regular ? base.fontWeights.regular : '')};
  font-weight: ${props => (props.black ? base.fontWeights.black : '')};
  margin: 0;

  span.accent {
    color: ${props => props.theme.colors.accent};
  }

  ${props =>
    props.H1 &&
    css`
      ${H1css};
    `
};

${props =>
    props.H2 &&
    css`
      ${H2css};
    `
};

${props =>
    props.H3 &&
    css`
      ${H3css};
    `
};

${props =>
    props.H4 &&
    css`
      ${H4css};
    `
};

${props =>
    props.H5 &&
    css`
      ${H5css};
    `
};

${props =>
    props.H6 &&
    css`
      ${H6css};
    `
};
`

export const H1 = styled(Heading.withComponent('h1'))`
  ${H1css};
`
export const H2 = styled(Heading.withComponent('h2'))`
  ${H2css};
`
export const H3 = styled(Heading.withComponent('h3'))`
  ${H3css};
`
export const H4 = styled(Heading.withComponent('h4'))`
  ${H4css};
`
export const H5 = styled(Heading.withComponent('h5'))`
  ${H5css};
`
export const H6 = styled(Heading.withComponent('h6'))`
  ${H6css};
`

export const SubHeading = styled.span`
  font-size: 19px;
  font-weight: ${base.fontWeights.light}
`
