import React from 'react'

import Layout from '../components/Layout'
import {Wrapper} from '../elements/'
import {base} from '../utilities/styles'
import ContactForm from '../components/ContactForm'

export default function constact () {
  return (
    <Layout>

      <Wrapper hasGrid theme={base} noSpace>
        <ContactForm />

      </Wrapper>
    </Layout>
  )
}
