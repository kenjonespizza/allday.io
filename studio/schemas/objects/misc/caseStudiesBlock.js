export default {
  name: 'caseStudiesBlock',
  title: 'Case Studies',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'headingBlock'
    },
    {
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'caseStudies'
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
