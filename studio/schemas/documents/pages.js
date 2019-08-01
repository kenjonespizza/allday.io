export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'pageInfo',
      title: 'Page Info',
      type: 'pageInfo',
      validation: Rule => Rule.required()
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'blocks',
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: "SEO",
      type: 'seo'
    }
  ],
  preview: {
    select: {
    title: 'pageInfo.pageName'
    }
  }
}