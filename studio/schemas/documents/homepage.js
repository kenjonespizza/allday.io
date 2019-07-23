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
      name: 'hero',
      title: 'Hero',
      type: 'homeHero'
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
    }
    // {
    //   name: 'services',
    //   title: 'Services',
    //   type: 'reference',
    //   to: [{type: 'services'}]
    // }

  ]
}