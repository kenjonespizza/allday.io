import React from 'react'
import {graphql} from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query ($slugName: String!) {

    page: sanityServices(pageInfo: {slug: {current: {eq: $slugName}}}) {
      pageInfo {
        pageName
        slug {
          current
        }
      }
      id
      _rawBlocks(resolveReferences: {maxDepth: 10})
      seo {
        ...SeoFragment
      }
      blocks {
        ...BlocksFragment
      }
    }
  }
`

const ServiceTemplate = (props) => <Page pageProps={props} />

export default ServiceTemplate
