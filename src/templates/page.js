import React from 'react'
import {graphql} from 'gatsby'

import Page from '../components/Page'

export const query = graphql`
  query ($slug: String!) {

    page: sanityPages(pageInfo: {slug: {current: {eq: $slug}}}) {
      pageInfo {
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

const PageTemplate = (props) => <Page pageProps={props} />

export default PageTemplate
