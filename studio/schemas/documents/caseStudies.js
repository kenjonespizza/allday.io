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
      title: 'Job Type / SubHeading',
      type: 'string',
      description: 'Ex: New Website, App Design, etc.'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'caseStudyCategories'}]
    },
    {
      name: 'excerpt',
      title: 'Short Description',
      type: 'string',
      description: 'This is displayed on the site where a short excerpt/preview is needed. Ex: On the homepage.'
    },
    {
      name: 'summary',
      title: 'Project Summary',
      type: 'richText'
    },
    {
      name: 'color',
      title: 'Brand Color',
      type: 'color',
      validation: Rule => Rule.required()
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
  ],
  preview: {
    select: {
      name: 'pageInfo'
    },
    prepare(value) {
      const title = value.name.pageName
      return {
        title
      }
    }
  }
}