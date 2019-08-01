export default {
  name: "heros",
  title: "Hero's",
  type: 'object',
  fields: [
    {
      name: 'heros',
      title: 'Choose a Hero',
      type: 'array',
      of: [
        {type: 'heroHome'},
      ],
      validation: Rule => Rule.max(1)
    },
  ],
  preview: {
    select: {
      heros: 'heros',
    },
    prepare(selection) {
      const {heros} = selection
      return {
        title: `Hero: ${heros[0]._type}`
      }
    }
  }
}
