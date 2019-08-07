export default {
  name: "banner1",
  title: "Banner: Layout 1",
  type: 'object',
  fields: [
    {
      name: 'heading',
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
