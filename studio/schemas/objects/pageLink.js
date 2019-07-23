export default {
  title: 'Page Link',
  name: 'pageLink',
  type: 'object',
  fields: [
    { name: 'pageName', title: 'Page Name', type: 'string' },
    { name: 'pageUrl', title: 'Page slug', description: 'EX: "/projects"', type: 'slug' },
    { name: 'showInMainNav',title: 'Show in main nav', type: 'boolean' },
    { name: 'showInHiddenNav',title: 'Show in hidden nav', type: 'boolean' },
  ]
}
