export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required()
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
    },
    {
      name: 'url',
      title: 'og:url',
      type: 'string',
      description: 'Leave blank unless URL you need to set specifically.  Changing this will not change the path to this page '
    },
    {
      name: 'type',
      title: 'og:type',
      type: 'string',
      description: 'Leave blank to set to default:"Website". For more see: https://ogp.me/?fbclid=IwAR31dyQltNRT7vhbjopUGPjmnw1HE3NzdwAX0jH_-mNzHEiSrNV3s8vG9Sw#types'
    },
  ]
}
