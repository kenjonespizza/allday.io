export default {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    /*{
      name: '',
      title: '',
      type: ''
    },*/
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'For internal use only.  For SEO title please see SEO section'
    },
    {
      name: 'blocks',
      title: 'Layout Blocks',
      type: 'blocks'
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'heroHome'
    },
    {
      name: 'servicesHeading',
      title: 'Services Heading',
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
      name: 'caseStudiesHeading',
      title: 'Case Studies Heading',
      type: 'headingBlock'
    },
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
        // layout: 'tags'
      }
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'ctas'
    }
  ]
}