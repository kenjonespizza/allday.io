import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import {ThemeProvider} from 'styled-components'

import Layout from '../components/Layout'
import {Heading, H1, H2, H3, H4, H5, H6, Button, Wrapper} from '../elements'
import {base, darkPulp, lightWatermelly} from '../utilities/styles'
import HeroHome from '../components/HeroHome'
import ServicesBlock from '../components/ServicesBlock'

export default () => {
  return (
    <>
      <Layout>
        <StaticQuery
          query={detailsQuery}
          render={data => {
            return (
              <>
                <Wrapper hasGrid theme={base}>
                  <HeroHome />
                  <ServicesBlock />
                </Wrapper>
              </>
            )
          }}
        />
      </Layout>
    </>
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(id: {eq: "8dbf3659-1c35-5ffd-acb0-4d87c935c20f"}) {
      title
    }
  }
`
