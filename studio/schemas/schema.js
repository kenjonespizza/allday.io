// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// color plugin
// import color from 'part:@sanity/color-input'

// Object Types
import figure from './objects/figure'
import imageAlt from './objects/imageAlt'
import pageLink from './objects/pageLink'
import heros from './objects/heros/heros'
import heroHome from './objects/heros/heroHome'
import button from './objects/button'
import headingBlock from './objects/headingBlock'
import reviewsBlock from './objects/misc/reviewsBlock'
import review from './objects/misc/review'
import banner1 from './objects/banners/banner1'
import banner2 from './objects/banners/banner2'
import blocks from './objects/blocks'
import serviceBlocks from './objects/serviceBlocks'
import caseStudiesBlocks from './objects/caseStudiesBlocks'
import seo from './objects/seo'
import pageInfo from './objects/pageInfo'
import servicesBlock from './objects/misc/servicesBlock'
import caseStudiesBlock from './objects/misc/caseStudiesBlock'
import caseStudiesRow from './objects/misc/caseStudiesRow'
import richText from './objects/richText'
import heroBasic from './objects/heroBasic'
import twoPanelText from './objects/twoPanelText'
import textBlock from './objects/textBlock'
import textBlock1 from './objects/textBlock1'
import formContact from './objects/forms/formContact'
import { gallery, body } from './objects/gallery'

// Document types
import siteSettings from './documents/siteSettings'
import pages from './documents/pages'
// import homepage from './documents/homepage'
import services from './documents/services'
import caseStudies from './documents/caseStudies'
import caseStudyCategories from './documents/caseStudyCategories'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    figure,
    imageAlt,
    pageLink,
    heros,
    heroHome,
    button,
    headingBlock,
    reviewsBlock,
    review,
    banner1,
    banner2,
    blocks,
    serviceBlocks,
    caseStudiesBlocks,
    seo,
    pageInfo,
    servicesBlock,
    caseStudiesBlock,
    caseStudiesRow,
    gallery,
    body,
    richText,
    heroBasic,
    twoPanelText,
    textBlock,
    textBlock1,
    formContact,
    
    /* Your types here! */
    siteSettings,
    pages,
    // homepage,
    services,
    caseStudies,
    caseStudyCategories
  ])
})
