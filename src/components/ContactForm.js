import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {rgba} from 'polished'

import {Wrapper, Container, H1, SubHeading, HeadingBlock, Button} from '../elements/'
import {darkBase, base, media} from '../utilities/styles'
import BlockContent from './BlockContent'

const FromWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  ${media.medium`

    ${props => props.twoColumn ? (`
      grid-template-columns: 1fr 1fr;
      grid-gap: ${base.spacings.base}px;
    `) : (`
      // width:50%;
    `)
    }
  `}
`

const Form = styled.form`
  button {
    width: 50%; 
  }

  .formText {
    border-bottom: solid 1px ${rgba(base.colors.black, 0.1)};
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-weight: ${base.fontWeights.bold};
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;

`

const Input = styled.input`
  border: 1px solid ${rgba(base.colors.black, 0.1)};
  border-radius: 1px;
  padding: 15px;
  margin: 15px 0 30px 1px;
`

const SideBar = styled.div`
  p:first-of-type {
    margin-top: 0;
  }
`

const ContactForm = (props) => {
  const {data, rawData} = props
  return (
    <Wrapper hasGrid theme={base} noSpace>
      <Container main>
        <FromWrapper twoColumn={rawData && rawData.sidebarText && rawData.sidebarText}>
          <Form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/'>
            {data && data.text && (
              <div className='formText'>
                {data.text}
              </div>
            )}
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='contact' />
            <Field className='field half first'>
              <label htmlFor='name'>Name</label>
              <Input type='text' name='name' id='name' />
            </Field>
            <Field className='field half'>
              <label htmlFor='email'>Email</label>
              <Input type='text' name='email' id='email' />
            </Field>
            <Field className='field'>
              <label htmlFor='message'>Message</label>
              <Input as='textarea' name='message' id='message' rows='6' />
            </Field>

            <Button as='button' type='submit'>
            Send Message
            </Button>

          </Form>
          {rawData && rawData.sidebarText && (
            <SideBar>
              <BlockContent blocks={rawData.sidebarText || []} />
            </SideBar>
          )}
        </FromWrapper>
      </Container>
    </Wrapper>
  )
}

export default ContactForm

export const query = graphql`
  fragment FormContactFragment on SanityFormContact {
    _key
    _type
    redirectLocation {
      current
    }
    text
  }
`
