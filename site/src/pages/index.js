import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        console.log('data:', data)
        return (
          <div>Hello world! -- {data.site.title}</div>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(id: {eq: "8dbf3659-1c35-5ffd-acb0-4d87c935c20f"}) {
      title
    }
  }
`
