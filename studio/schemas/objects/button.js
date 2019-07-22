export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    { name: 'buttonText', title: 'Button Text', type: 'string' },
    { name: 'buttonIcon', title: 'button-icon', description: 'FontAwesome name EX: "fas fa-play', type: 'string' },
    { name: 'url',title: 'URL', type: 'url' },
    { name: 'slug',title: 'Slug', type: 'slug' }
  ]
}
