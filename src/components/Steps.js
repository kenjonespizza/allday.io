import React, {useContext} from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import BlockContent from './BlockContent'
import {Wrapper, Container as StepBlockContainer, HeadingBlock, Button} from '../elements'
import {base, darkBase, media, transition} from '../utilities/styles'

const StepBlockWrap = styled(Wrapper)`

`

const Container = styled(StepBlockContainer)`

`

const StepsWrap = styled.ol`
  display: grid;
  align-content: center;
  grid-gap: ${props => props.theme.spacings.base}px;
  grid-template-columns: 1fr;
  list-style: none;
  counter-reset: item;
  margin: 0;
  padding: 0;

  ${media.large`
    grid-template-columns: 1fr 1fr; 
  `}
`

const Step = styled.li`
  counter-increment: item;
  display: flex;
  align-items: center;
  /* border: 1px solid ${base.colors.black}; */
  padding: ${base.spacings.base}px;
  background-color: ${base.colors.white};
  color: ${base.colors.text};
  box-shadow: ${props => props.theme.shadows.box};
  /* border-bottom: 3px dashed ${base.colors.black}; */
  ${transition({duration: '.7s'})};

  p {color: ${base.colors.text};}

  &:hover {
    box-shadow: ${props => props.theme.shadows.boxHover};
    transform: translateY(-10px);

    &:before {
      color: ${props => props.theme.colors.accent};
    }
  }

  &:before {
    content: counter(item)"";
    color: ${base.colors.text};
    font-size: 80px;
    font-weight: ${base.fontWeights.bold};
    padding-right: ${base.spacings.base}px;
    ${transition({})};
  }
`

const Text = styled.div`
`

const Steps = ({data, rawData}) => {
  const {isDark, headingBlock, steps, isActive} = data
  const {heading, subHeading} = headingBlock || ''

  return (
    (isActive !== false) && (
      <StepBlockWrap hasGrid theme={isDark ? darkBase : base}>
        <Container>

          {headingBlock && (heading || subHeading) && (
            <HeadingBlock {...headingBlock} />
          )}

          {steps && (
            <StepsWrap count={steps.length}>
              {steps.map((step, i) => {
                console.log('step:', step)

                return (
                  <Step key={step._key}>
                    <Text>
                      <BlockContent blocks={rawData.steps[i].text || []} />
                    </Text>
                  </Step>
                )
              })}
            </StepsWrap>
          )}

        </Container>
      </StepBlockWrap>
    )
  )
}

export default Steps

export const query = graphql`
  fragment StepsFragment on SanitySteps {
    _key
    _type
    isActive
    isDark
    headingBlock {
      heading
      subHeading
    }
    steps {
      _key
      isActive
    }
  }
`
