import styled, {css} from 'styled-components'

import {base, media} from '../utilities/styles'
console.log('base:', base)

export const HeadingBase = css`
  margin: ${base.spacings.heading}px 0 ${base.spacings.heading / 2}px};

  &:first-child {
    margin-top: 0 ;
  }
`

export const H1css = css`
  ${HeadingBase}
  font-size: 35px;
  
  ${media.medium`
    font-size: 45px;
  `}

  ${media.large`
    font-size: 55px;
  `}
`
export const H2css = css`
  ${HeadingBase}
  font-size: 40px;
  
  ${media.medium`
    font-size: 45px;
  `}

  ${media.large`
    font-size: 50px;
  `}
`
export const H3css = css`
  ${HeadingBase}
  font-size: 30px;
  
  ${media.medium`
    font-size: 35px;
  `}

  ${media.large`
    font-size: 40px;
  `}
`
export const H4css = css`
  ${HeadingBase}
  font-size: 22px;
  
  ${media.medium`
    font-size: 22px;
  `}

  ${media.large`
    font-size: 22px;
  `}
`
export const H5css = css`
  ${HeadingBase}
  font-size: 21px;
  
  ${media.medium`
    font-size: 21px;
  `}

  ${media.large`
    font-size: 21px;
  `}
`
export const H6css = css`
  ${HeadingBase}
  font-size: 19px;
  
  ${media.medium`
    font-size: 19px;
  `}

  ${media.large`
    font-size: 19px;
  `}
`

export const Heading = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 55px;
  display: block;
  font-family: ${base.fonts.heading};
  font-weight: ${base.fontWeights.bold};
  font-weight: ${props => (props.light ? base.fontWeights.light : '')};
  font-weight: ${props => (props.regular ? base.fontWeights.regular : '')};
  font-weight: ${props => (props.black ? base.fontWeights.black : '')};
  margin: 0;
  line-height: ${base.lineHeights.heading};

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
  font-size: 16px;
  font-weight: ${base.fontWeights.light};
  margin-bottom: 10px;

  ${media.medium`
    font-size: 19px;
  `}
`
