export default {
  name: "banner2",
  title: "Banner: Simple",
  type: 'object',
  fields: [
    {
      name: 'headingBlock',
      title: 'Heading',
      type: 'headingBlock'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    }
  ],
  preview: {
    select: {
      title: 'heading.heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Banner: ${title}`
      }
    }
  }
}
