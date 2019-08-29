export default {
  name: 'twoPanelText',
  title: 'Text Block: 2 Column',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is for internal use only'
    },
    {
      name: 'rightText',
      title: 'Left Text',
      type: 'richText'
    },
    {
      name: 'leftText',
      title: 'Right Text',
      type: 'richText'
    }
  ]
}
