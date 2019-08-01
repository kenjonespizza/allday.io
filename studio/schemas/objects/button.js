export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    { name: 'text', title: 'Button Text', type: 'string' },
    { name: 'icon', title: 'button-icon', description: 'FontAwesome name EX: "fas fa-play', type: 'string' },
    { name: 'url',title: 'URL', type: 'url', readOnly: true },
    { name: 'slug',title: 'Slug', type: 'slug' }
  ]
}
