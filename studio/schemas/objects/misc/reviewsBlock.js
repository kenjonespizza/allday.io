export default {
  name: 'reviewsBlock',
  title: 'Reviews',
  type: 'object',
  fields: [
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'review'
        }
      ],
      options: {
        sortable: true
      }
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ]
}
