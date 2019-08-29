export default {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    // {
    //   name: 'name',
    //   title: 'Client Name',
    //   type: 'string'
    // },
    // {
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: doc => `${doc.name}`
    //   }
    // },
    // {
    //   name: 'title',
    //   title: 'Project Title',
    //   type: 'string'
    // },
    {
      name: 'pageInfo',
      title: 'Page Info',
      type: 'pageInfo',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Brand Color',
      type: 'color'
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'caseStudiesBlocks',
      // validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: "SEO",
      type: 'seo'
    }
    // {
    //   title: 'Rich text example',
    //   name: 'myRichTextExample',
    //   type: 'array',
    //   of: [{type: 'block'}]
    // }
    // {
    //   name: 'sampleImage',
    //   title: 'Sample Image',
    //   type: 'image'
    // }
  ]
}