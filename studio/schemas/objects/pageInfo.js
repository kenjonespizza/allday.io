export default {
  name: 'pageInfo',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'For internal use only.  For SEO title please see SEO section',
    },
    { 
      name: 'slug',
      title: 'Slug',
      description: 'EX: "projects". No leading slash',
      type: 'slug',
       options: {
          source: 'pageName',
          slugify: input => input
                              .toLowerCase()
                              .replace(/\s+/g, '-')
                              .slice(0, 200)
        }
      // validation: Rule => Rule.min(0)
    },
    {
      name: 'showInMainNav',
      title: 'Show in main nav',
      type: 'boolean'
    },
    {
      name: 'showInHiddenNav',
      title: 'Show in hidden nav',
      type: 'boolean'
    },
  ]
}
