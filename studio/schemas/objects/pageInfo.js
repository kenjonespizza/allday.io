export default {
  name: 'pageInfo',
  title: 'Page Information',
  type: 'object',
  fields: [
    {
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'This is not the SEO Title.  See "SEO" section further down the page 😜',
    },
    { 
      name: 'slug',
      title: 'Slug',
      description: 'EX: "projects". No leading slash',
      type: 'slug',
      options: {
        source: doc => doc.pageInfo && `${doc.pageInfo.pageName}`,
      }
    }
    // {
    //   name: 'showInMainNav',
    //   title: 'Show in main nav',
    //   type: 'boolean'
    // },
    // {
    //   name: 'showInHiddenNav',
    //   title: 'Show in hidden nav',
    //   type: 'boolean'
    // },
  ]
}