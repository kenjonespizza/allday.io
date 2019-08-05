import React from 'react'

import Layout from '../components/Layout'

const Service = ({pageContext}) => {
  return (
    <Layout>
      <h1>Service Page - {pageContext.slug}</h1>
    </Layout>
  )
}

export default Service
