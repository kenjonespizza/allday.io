import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

import {base} from '../utilities/styles'

const YouTubePlayerWrap = styled.div`
  position: relative;
  padding-bottom: 56.25% /* 16:9 */;
  padding-top: 25px;
  height: 0;
  /* max-height: calc(100vh - 123px);
  overflow: hidden; */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* max-height: calc(100vh - 123px); */
  }
`

export const YouTubePlayer = ({opts, url}) => {
  const id = getYouTubeId(url)
  const defineOpts = opts || {
    height: '100%',
    width: '100%',
    color: 'white',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  return (
    <YouTubePlayerWrap>
      <YouTube
        opts={defineOpts}
        videoId={id}
      />
    </YouTubePlayerWrap>
  )
}
