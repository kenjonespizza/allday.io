import React, {useContext} from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'

import {YouTubePlayer, H1, Button} from '../elements'
import {base} from '../utilities/styles'
// import Figure from './figure'

const BlockRenderer = props => {
  console.log('props:', props)
  const style = props.node.style || 'normal'

  // if (/^h\d/.test(style)) {
  //   const level = style.replace(/[^\d]/g, '')
  //   return <h2 className={`my-heading level-${level}`}>{props.children}</h2>
  // }

  // return style === 'blockquote'
  //   ? <blockquote className="my-block-quote">{props.children}</blockquote>
  //   : <p className="my-paragraph">{props.children}</p>
  return props

  // return style === 'h1'
  //   ? <H1>{props.children}</H1>
  //   : props
}

const serializers = {
  types: {
    youtube: ({node}) => {
      const opts = {
        height: '100%',
        width: '100%',
        color: 'white',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      }
      const {url} = node
      return (
        <YouTubePlayer
          opts={opts}
          url={url}
        />
      )
    },
    button: (button) => {
      console.log('button:', button)
      return (
        <Button key={button._key} isDark='false' {...button.node} />
      )
    },
    block: (props) => {
      console.log('props:', props)
      if (props.node.style === 'h1') {
        return (
          <H1 as='h2'>{props.children}</H1> // This is custome component
        )
      } else {
        return SanityBlockContent.defaultSerializers.types.block(props)
      }
    }
  }
}

export default serializers
