// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

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
import banners from './objects/banners/banners'
import banner1 from './objects/banners/banner1'
import blocks from './objects/blocks'
import seo from './objects/seo'
import pageInfo from './objects/pageInfo'
import servicesBlock from './objects/misc/servicesBlock'
import caseStudiesBlock from './objects/misc/caseStudiesBlock'

// Document types
import siteSettings from './documents/siteSettings'
import pages from './documents/pages'
// import homepage from './documents/homepage'
import services from './documents/services'
import caseStudies from './documents/caseStudies'

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
    banners,
    banner1,
    blocks,
    seo,
    pageInfo,
    servicesBlock,
    caseStudiesBlock,
    
    /* Your types here! */
    siteSettings,
    pages,
    // homepage,
    services,
    caseStudies
  ])
})
