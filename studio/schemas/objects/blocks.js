export default {
  title: 'Blocks',
  name: 'blocks',
  type: 'object',
  description: 'Use this to add/delete/reorder sections on the page',
  fields: [
    {
      name: 'blocks',
      title: 'Select Blocks',
      type: 'array',
      of: [
        {type: 'banner1'},
        {type: 'heroHome'},
        {type: 'headingBlock'},
        {type: 'servicesBlock'},
        {type: 'reviewsBlock'},
      ],
      options: [
        {editModal: "popover"}
      ]
    }
  ]
}