// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object Types
import figure from './objects/figure'
import imageAlt from './objects/imageAlt'
import pageLink from './objects/pageLink'
import homeHero from './objects/homeHero'
import button from './objects/button'
import headingBlock from './objects/headingBlock'

// Document types
import siteSettings from './documents/siteSettings'
import homepage from './documents/homepage'
import services from './documents/services'

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
    homeHero,
    button,
    headingBlock,
    
    /* Your types here! */
    siteSettings,
    homepage,
    services
  ])
})
