export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text'
    },
    {
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: '1200 x 630 recommended'
    },
    {
      name: 'index',
      title: 'Index/Follow?',
      type: 'boolean',
      description: 'Defaults to true'
    }
  ]
}
