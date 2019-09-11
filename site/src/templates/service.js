import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import {base} from '../utilities/styles'
import {SubHeading, H1} from '../elements'
import Layout from '../components/Layout'
import HeroBasic from '../components/HeroBasic'
import BlockContent from '../components/BlockContent'
import TextBlock from '../components/TextBlock'
import Seo from '../components/Seo'

export const query = graphql`
  query ServicesQuery($slugName: String!) {
    service: sanityServices(slug: {current: {eq: $slugName}}) {
      name
      _rawBody(resolveReferences: {maxDepth: 10})
      _rawOverview(resolveReferences: {maxDepth: 10})
    }
  }
`

// const Text = styled.div`
//   /* grid-column: 1 / span 3;
//     grid-row: 3 / span 1;
//     margin-top: ${base.spacings.base}px; */
//     display: block;
// `

const Service = ({pageContext, data, seo}) => {
  const {name} = data.service

  return (
    <Layout>
      {seo && <Seo context={props.pageContext} {...seo} />}
      <HeroBasic>
        <SubHeading>we offer:</SubHeading>
        <H1>{name}</H1>
        {data.service._rawOverview &&
          <div className='Text'>
            <BlockContent blocks={data.service._rawOverview || []} />
          </div>}
      </HeroBasic>

      {data.service._rawBody &&
        <TextBlock isDark text={data.service._rawBody} />}
    </Layout>
  )
}

export default Service
