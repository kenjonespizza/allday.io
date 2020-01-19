import {graphql} from 'gatsby'

export const query = graphql`
  fragment BlocksFragment on SanityBlocks {
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
      ... on SanityHeroHomeV2 {
        ...HeroHomeV2Fragment
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
      ... on SanitySteps {
        ...StepsFragment
      }
    }
  }
`
