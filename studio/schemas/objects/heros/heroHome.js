import React from 'react'

export default {
  title: 'Hero: Homepage',
  name: 'heroHome',
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
      name: 'button',
      title: 'Button',
      type: 'button'
    }
    // {
    //   name: 'buttonText',
    //   title: 'Button Text',
    //   type: 'string' 
    // },
    // {
    //   name: 'videoURL',
    //   title: 'Video URL',
    //   type: 'url',
    //   description: 'EX: https://youtu.be/O-FGqfdCkOM' 
    // },
  ],
  preview: {
    select: {
      title: 'mainText',
      media: 'imageLeft.asset.url'
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: `Hero: ${title}`,
        media: <img src={media} alt={`${title}`} />
      }
    }
  }
}
