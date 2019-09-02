export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    /*{
      name: '',
      title: '',
      type: ''
    },*/
    {
      name: 'name',
      title: 'Service Name',
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
      name: 'sampleImage',
      title: 'Sample Image',
      type: 'image'
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'richText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText'
    }
  ]
}