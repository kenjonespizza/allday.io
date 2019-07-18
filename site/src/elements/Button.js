import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

import {base} from '../utilities/styles'
import {transition} from '../utilities/styles/transition'

const ButtonStyles = css`
  background-color: ${props => props.theme.colors.accent};
  border: none;
  font-size: 25px;
  font-weight: 800;
  border-radius: 100px;
  text-decoration: none;
  color: #fff;
  padding: 20px 50px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  ${transition({})};

  &:hover {
    background-color: ${props => props.theme.colors.accentHover};
  }
`

const StyledButton = styled.button`
  ${ButtonStyles};
`

const StyledButtonLink = styled(Link)`
  ${ButtonStyles};
`

export const Button = ({to, type, children}) => {
  if (type && type === 'button') {
    return (
      <StyledButton>{children}</StyledButton>
    )
  } else {
    return (
      <StyledButtonLink to={to}>{children}</StyledButtonLink>
    )
  }
}
