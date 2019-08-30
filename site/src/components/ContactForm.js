import React from 'react'

import {Wrapper, Container} from '../elements/'

const ContactForm = () => {
  return (
    <Wrapper>
      <Container>
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/'>
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='contact' />
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>
          <div className='field'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' rows='6' />
          </div>
          <ul className='actions'>
            <li>
              <input type='submit' value='Send Message' className='special' />
            </li>
            <li>
              <input type='reset' value='Clear' />
            </li>
          </ul>
        </form>
      </Container>
    </Wrapper>
  )
}

export default ContactForm