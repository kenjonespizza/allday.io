import React from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import {Wrapper, Container, H1, SubHeading, HeadingBlock, Button} from '../elements/'
import {darkBase, base} from '../utilities/styles'

const FromWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Form = styled.form`

  button {
    width: 50%; 
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

const ContactForm = () => {
  return (
    <Wrapper hasGrid theme={base}>
      <Container main>
        <HeadingBlock left>
          <SubHeading>
            Speak directly to us
          </SubHeading>
          <H1 as='h2'>
            Send us a message
          </H1>
        </HeadingBlock>
        <FromWrapper>
          <Form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/'>
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
          <div>Sidebar</div>
        </FromWrapper>
      </Container>
    </Wrapper>
  )
}

export default ContactForm
