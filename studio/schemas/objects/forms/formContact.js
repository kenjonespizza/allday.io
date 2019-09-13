export default {
  type: 'object',
  name: 'formContact',
  title: 'Contact From',
  fieldsets: [
    {name: 'form', title: 'Form'},
    {name: 'sidebar', title: 'Sidebar'}
  ],
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      fieldset: 'form'
    },
    {
      name: 'redirectLocation',
      title: 'Redirect Location',
      type: 'slug',
      description: '/you-did-it',
      fieldset: 'form'
    },
    {
      name: 'sidebarText',
      title: 'Text',
      type: 'richText',
      fieldset: 'sidebar',
    }
  ]
}