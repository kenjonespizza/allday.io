export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your portfolio for search engines and social media.'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image-alt'
    },
    {
      name: 'navLinks',
      title: 'Nav Links',
      type: 'array',
      of: [{type: 'pageLink'}]
    }
  ]
}