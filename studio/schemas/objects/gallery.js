export const gallery = {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'array',
      of: [
        {
          type: 'figure'
        }
      ]
    }
  ]
}

export const body = {
  name: 'body',
  type: 'array',
  title: 'Body',
  of: [
    {type: 'block'},
    {type: 'gallery'}
  ]
}


/**
 * in schema.js:
 * import { gallery, body } from './body'
 * export default createSchema({
 *  name: 'default',
 *  types: schemaTypes.concat([
 *    // your other types,
 *    gallery,
 *    body
 * ])
 */