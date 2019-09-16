export default {
  name: 'caseStudyCategories',
  title: 'Case Study Categories',
  type: 'document',
  fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: doc => `${doc.name}`
        }
      },
      {
        title: 'Description',
        name: 'description',
        type: 'richText'
      }
  ]
}