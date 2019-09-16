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
      name: 'headingBlock',
      title: 'Heading',
      type: 'headingBlock'
    },
    {
      name: 'leftText',
      title: 'Left Text',
      type: 'richText'
    },
    {
      name: 'rightText',
      title: 'Right Text',
      type: 'richText'
    },
    {
      name: 'isDark',
      title: 'Dark Theme',
      type: 'boolean'
    }
  ]
}
