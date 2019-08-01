export default {
  name: "banners",
  title: "Banners's",
  type: 'object',
  fields: [
    {
      name: 'banners',
      title: 'Choose a Banner',
      type: 'array',
      of: [
        {type: 'banner1'},
      ],
      validation: Rule => Rule.max(1)
    },
  ],
  preview: {
    select: {
      banners: 'banners',
    },
    prepare(selection) {
      const {banners} = selection
      return {
        title: `Banner: ${banners[0]._type}`
      }
    }
  }
}
