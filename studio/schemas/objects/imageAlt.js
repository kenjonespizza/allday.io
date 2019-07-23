export default {
  name: 'image-alt',
  title: 'ImageAlt',
  type: 'image',
  options: {
    hotspot: true,
    storeOriginalFilename: false
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
