import React, {useContext} from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'

import {YouTubePlayer, H1, H2, H3, H4, H5, H6, Button} from '../elements'

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
      return (
        <Button key={button._key} className='isTextBox' isDark='false' {...button.node} />
      )
    },
    block: (props) => {
      if (props.node.style === 'h1') {
        return (
          <H1 as='h2'>{props.children}</H1> // This is custome component
        )
      } else if (props.node.style === 'h2') {
        return (
          <H2>{props.children}</H2> // This is custome component
        )
      } else if (props.node.style === 'h3') {
        return (
          <H3>{props.children}</H3> // This is custome component
        )
      } else if (props.node.style === '42') {
        return (
          <H4>{props.children}</H4> // This is custome component
        )
      } else if (props.node.style === 'h5') {
        return (
          <H5>{props.children}</H5> // This is custome component
        )
      } else if (props.node.style === 'h6') {
        return (
          <H6>{props.children}</H6> // This is custome component
        )
      } else {
        return SanityBlockContent.defaultSerializers.types.block(props)
      }
    }
  }
}

export default serializers
