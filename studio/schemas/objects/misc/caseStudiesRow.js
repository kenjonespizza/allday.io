export default {
  name: 'caseStudiesRow',
  title: 'Case Studies Rows',
  type: 'object',
  fields: [
    {
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'caseStudies'}
          ]
        }
      ],
      options: {
        sortable: true
      }
    }
  ]
}
