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
        blocks {
        ... on SanityBanner1 {
          ...Banner1Fragment
        }
        ... on SanityBanner2 {
          ...Banner2Fragment
        }
        ... on SanityHeroHome {
          ...HeroHomeFragment
        }
        ... on SanityServicesBlock {
          ...ServicesBlockFragment
        }
        ... on SanityReviewsBlock {
          ...ReviewsBlockFragment
        }
        ... on SanityHeroBasic {
          ...HeroBasicFragment
        }
        ... on SanityTextBlockWithImage {
          ...TextBlockWithImageFragment
        }
        ... on SanityGallery {
          ...GalleryFragment
        }
        ... on SanityTwoPanelText {
         ...TwoPanelTextFragment
        }
        ... on SanityTextBlock {
          ...TextBlockFragment
        }
        ... on SanityTextBlockQuarters{
          ...TextBlockQuartersFragment
        }
        ... on SanityCaseStudiesBlock {
          ...CaseStudiesBlockFragment
        }
        ... on SanityFormContact {
          ...FormContactFragment
        }
        ... on SanityButtonsBlock {
          ...ButtonsBlockFragment
        }
        ... on SanityLogoGrid {
          ...LogoGridFragment
        }
      }
    }
  }
}
`

const PageTemplate = (props) => <Page pageProps={props} />

export default PageTemplate
