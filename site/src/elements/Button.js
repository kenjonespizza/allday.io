import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
// import {readableColor} from 'polished'

import {transition, base} from '../utilities/styles'

export const ButtonStyles = css`
  background-color: ${props => props.theme.colors.accent};
  border: none;
  font-size: ${base.fontSizes.base};
  font-weight: ${base.fontWeights.semibold};
  border-radius: 1px;
  text-decoration: none;
  color: ${props => props.theme.colors.onAccent};
  padding: 23px 50px 21px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  ${transition({})};

  &:hover {
    background-color: ${props => props.theme.colors.accentHover};
    /* border-radius: 30px; */
    color: ${props => props.theme.colors.accentHoverText};
  }

  i {
    font-size: 16px;
    margin-left: 10px;
  }
`

const LinkButtonStyled = styled(Link)`
  ${ButtonStyles};
`
const AButtonStyled = styled.a`
  ${ButtonStyles};
`
const ButtonStyled = styled.a`
  ${ButtonStyles};
`

export const Button = ({slug, icon, text, url, children, className}) => {
  if (slug) {
    return (
      <LinkButtonStyled className={className} to={slug && `/${slug.current}`} >
        {children || text}  {icon && <i className={icon} />}
      </LinkButtonStyled>
    )
  } else if (url) {
    return (
      <AButtonStyled className={className} href={url}>
        {children || text}  {icon && <i className={icon} />}
      </AButtonStyled>
    )
  } else {
    return (
      <ButtonStyled className={className}>
        {children || text}  {icon && <i className={icon} />}
      </ButtonStyled>
    )
  }
}

// const StyledButtonLink = styled(Link)`
//   ${ButtonStyles};
// `

// const ButtonMerge = ({to, type, icon, children}) => {
//   if (type && type === 'button') {
//     return (
//       <StyledButton>{children} {icon && <i className={icon} />}</StyledButton>
//     )
//   } else {
//     return (
//       <StyledButtonLink to={to}>{children} {icon && <i className={icon} />}</StyledButtonLink>
//     )
//   }
// }

// export const Button = styled(ButtonMerge)``
