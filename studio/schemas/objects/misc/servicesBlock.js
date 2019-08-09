export default {
  name: 'servicesBlock',
  title: 'Services',
  type: 'object',
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading',
      type: 'headingBlock'
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'services'}
          ]
        }
      ],
      options: {
        sortable: true
        // layout: 'tags'
      }
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ]
}