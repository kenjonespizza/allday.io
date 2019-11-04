import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
// import {readableColor} from 'polished'

import {transition, base} from '../utilities/styles'

export const ButtonStyles = css`
  border: ${props => (props.color) ? `3px solid ${props.theme.colors.accent}` : ''};
  background-color: ${props => props.theme.colors.accent};
  /* Apply background color and border color if the color prop is passed */
  background-color: ${props => (props.color) ? props.theme.colors[props.color] : ''};
  border-color: ${props => (props.color) ? props.theme.colors[props.color] : ''};
  /* Set background color as 'transparent' if 'isghost' is true */
  background-color: ${props => props.isghost === 'true' ? 'transparent' : ''};
  font-size: ${base.fontSizes.base};
  font-weight: ${base.fontWeights.semibold};
  border-radius: 1px;
  text-decoration: none;
  color: ${props => props.theme.colors.onAccent};
  color: ${props => (props.color === 'white' || props.color === 'pulp') ? props.theme.colors.black : ''};
  color: ${props => (props.isghost === 'true' && props.color) ? props.theme.colors[props.color] : ''};
  padding: 23px 50px 21px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  ${transition({})};

  & * {
    color: ${props => props.theme.colors.onAccent};
  }

  &:hover {
    /* Base colors... */
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accentHover};
    border-color: ${props => props.theme.colors.accentHover};
    
    /* TODO: Clean up the below conditionals */
    color: ${props => (props.color === 'white' || props.color === 'black') ? props.theme.colors.onAccent : ''};
    color: ${props => props.isghost === 'true' && (props.color === 'white' || props.color === 'black') ? props.theme.colors.accentHoverText : ''};
    color: ${props => props.isghost === 'true' && props.color === 'pulp' ? props.theme.colors.black : ''};

    background-color: ${props => props.color && props.isdark === 'false' ? props.theme.colors.black : ''};
    border-color: ${props => props.color && props.isdark === 'false' ? props.theme.colors.black : ''};
    
    background-color: ${props => props.color && props.isdark === 'true' ? props.theme.colors.white : ''};
    border-color: ${props => props.color && props.isdark === 'true' ? props.theme.colors.white : ''};

    background-color: ${props => props.color && (props.color === 'white' || props.color === 'black') ? props.theme.colors.seal : ''};
    border-color: ${props => props.color && (props.color === 'white' || props.color === 'black') ? props.theme.colors.seal : ''};

    background-color: ${props => props.color && props.isghost === 'true' ? props.theme.colors[[props.color]] : ''};
    border-color: ${props => props.color && props.isghost === 'true' ? props.theme.colors[[props.color]] : ''};
    
    background-color: ${props => props.color && props.isghost === 'true' && (props.color === 'white' || props.color === 'black') ? props.theme.colors.accentHover : ''};
    border-color: ${props => props.color && props.isghost === 'true' && (props.color === 'white' || props.color === 'black') ? props.theme.colors.accentHover : ''};

  
    & * {
  
      color: ${props => props.theme.colors.accentHoverText};
    }
  }

  i {
    font-size: 16px;
    margin-left: 10px;
  }
`

export const LinkButtonStyled = styled(Link)`
  ${ButtonStyles};
`
export const AButtonStyled = styled.a`
  ${ButtonStyles};
`
export const ButtonStyled = styled.a`
  ${ButtonStyles};
`

export const Button = ({slug, icon, text, url, children, className, slugPrefix, color, isGhost, isDark}) => {
  if (slug) {
    const slugPre = slugPrefix || ''

    return (
      <LinkButtonStyled isghost={isGhost ? 'true' : 'false'} color={color} isdark={isDark} className={className} to={slug && `${slugPre}/${slug.current}`}>
        {children || text}  {icon && <i className={icon} />}
      </LinkButtonStyled>
    )
  } else if (url) {
    return (
      <AButtonStyled isghost={isGhost ? 'true' : 'false'} color={color} isdark={isDark} className={className} href={url}>
        {children || text}  {icon && <i className={icon} />}
      </AButtonStyled>
    )
  } else {
    return (
      <ButtonStyled isghost={isGhost ? 'true' : 'false'} color={color} isdark={isDark} as='button' className={className}>
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
