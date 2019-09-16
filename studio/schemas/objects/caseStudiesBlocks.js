export default {
  title: 'Blocks',
  name: 'caseStudiesBlocks',
  type: 'object',
  description: 'Use this to add/delete/reorder sections on the page',
  fields: [
    {
      name: 'caseStudiesBlocks',
      title: 'Select Blocks',
      type: 'array',
      of: [
        {type: 'heroBasic'},
        // {type: 'banner1'},
        {type: 'banner2'},
        {type: 'gallery'},
        {type: 'twoPanelText'},
        {type: 'textBlock1'}
      ],
      options: [
        {editModal: "popover"}
      ]
    }
  ]
}