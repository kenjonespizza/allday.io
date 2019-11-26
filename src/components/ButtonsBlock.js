import React, {useContext} from 'react'
import {graphql} from 'gatsby'
import styled, {ThemeContext} from 'styled-components'

import {Wrapper, Container as ButtonsBlockContainer, HeadingBlock, Button} from '../elements'
import {base, darkBase, media} from '../utilities/styles'

const ButtonsBlockWrap = styled(Wrapper)`

`

const Container = styled(ButtonsBlockContainer)`

`

const ButtonsWrap = styled.div`
  display: grid;
  align-content: center;
  grid-gap: ${props => props.theme.spacings.base}px;
  grid-template-columns: repeat(${props => props.count}, 1fr); 
`

const ButtonsBlock = ({data}) => {
  const {isDark, headingBlock, buttons} = data
  const {heading, subHeading} = headingBlock || ''

  return (
    <ButtonsBlockWrap hasGrid theme={isDark ? darkBase : base}>
      <Container>

        {headingBlock && (heading || subHeading) && (
          <HeadingBlock {...headingBlock} />
        )}

        {buttons && (
          <ButtonsWrap count={buttons.length <= 3 ? buttons.length : 3}>
            {buttons.map((button, i) => {
              return (
                <Button key={button._key} {...button} />
              )
            })}
          </ButtonsWrap>
        )}
      </Container>
    </ButtonsBlockWrap>
  )
}

export default ButtonsBlock

export const query = graphql`
  fragment ButtonsBlockFragment on SanityButtonsBlock {
    _key
    _type
    isDark
    headingBlock {
      heading
      subHeading
    }
    buttons {
      ...ButtonFragment
    }
  }
`
