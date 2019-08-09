export default {
  title: 'Blocks',
  name: 'serviceBlocks',
  type: 'object',
  description: 'Use this to add/delete/reorder sections on the page',
  fields: [
    {
      name: 'serviceBlocks',
      title: 'Select Blocks',
      type: 'array',
      of: [
        {type: 'heroBasic'},
        {type: 'banner1'}
      ],
      options: [
        {editModal: "popover"}
      ]
    }
  ]
}