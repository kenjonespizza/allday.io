export default {
  title: 'Home Hero',
  name: 'homeHero',
  type: 'object',
  fields: [
    {
      name: 'mainText',
      title: 'Main Text',
      type: 'string' 
    },
    {
      name: 'imageLeft',
      title: 'Left Image',
      type: 'image-alt',
    },
    {
      name: 'imageRight',
      title: 'Right Image',
      type: 'image-alt',
    },
    {
      name: 'videoURL',
      title: 'Video URL',
      type: 'url',
      description: 'EX: https://youtu.be/O-FGqfdCkOM' 
    },
  ]
}
