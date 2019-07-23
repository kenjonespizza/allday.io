import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
// import {readableColor} from 'polished'

import {transition, base} from '../utilities/styles'

const ButtonStyles = css`
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

const StyledButton = styled.button`
  ${ButtonStyles};
`

const StyledButtonLink = styled(Link)`
  ${ButtonStyles};
`

export const Button = ({to, type, icon, children}) => {
  if (type && type === 'button') {
    return (
      <StyledButton>{children} {icon && <i className={icon} />}</StyledButton>
    )
  } else {
    return (
      <StyledButtonLink to={to}>{children} {icon && <i className={icon} />}</StyledButtonLink>
    )
  }
}
