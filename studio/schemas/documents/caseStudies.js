export default {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    /*{
      name: '',
      title: '',
      type: ''
    },*/
    {
      name: 'name',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.name}`
      }
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string'
    }
    // {
    //   name: 'sampleImage',
    //   title: 'Sample Image',
    //   type: 'image'
    // }
  ]
}