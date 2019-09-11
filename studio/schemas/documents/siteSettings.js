export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Fallback incase a page has an empty title'
    },
    {
      name: 'titleBase',
      type: 'string',
      title: 'Title Base',
      description: 'second part of Mete Title.  Ex: ___ - THIS VALUE'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Fallback incase a page has an empty description.'
    },
    {
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      description: 'Fallback incase keyworks is left empty',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Site Language',
      description: 'This set the "meta-lang".'
    },
    {
      name: 'baseUrl',
      type: 'string',
      title: 'Site Base URL'
    },
    {
      name: 'twitterId',
      type: 'string',
      title: 'Twitter User'
    },
    {
      name: 'image',
      title: 'Meta Image',
      type: 'image-alt',
      description: 'Default share image'
    },
    {
      name: 'navLinks',
      title: 'Nav Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'pages'}
          ]
        }
      ],
    },
    {
      name: 'hiddenNavLinks',
      title: 'Slideout Nav Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'pages'}
          ]
        }
      ],
    }
  ],
  preview: {
    select: {},
    prepare(value) {
      return {
        title: 'Site Settings'
      }
    }
  }
}