export default {
  name: 'servicesBlock',
  title: 'Services',
  type: 'object',
  fields: [
    {
      name: 'heading',
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
    }
  ]
}