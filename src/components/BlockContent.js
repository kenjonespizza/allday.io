import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import clientConfig from '../../client-config'
import serializers from './serializers'

const BlockContent = ({blocks}) => {
  return (
    <BaseBlockContent className='blockContent' blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  )
}

export default BlockContent
