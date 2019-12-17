import React, {Component} from 'react'
import Modal from 'react-responsive-modal'

import {base} from '../utilities/styles'

import {YouTubePlayer} from './'
class PopUpPlayer extends Component {
  render () {
    const opts = {
      height: '100%',
      width: '100%',
      color: 'white',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const {open, toggleModal, video} = this.props
    return (
      <Modal
        open={open}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: 'unset',
            width: '90%',
            // height: '90%',
            padding: 'unset',
            margin: 'auto'
          },
          overlay: {
            background: base.colors.black,
            padding: 0
          },
          closeButton: {
            // background: base.colors.accent,
            color: base.colors.white,
            transform: 'translate(45px, -10px)',
            cursor: 'pointer'
          }
        }}
        classNames={{closeIcon: 'vid-close-icon'}}
        center
      >
        <YouTubePlayer
          opts={opts}
          url={video.url}
        />
      </Modal>
    )
  }
}

export default PopUpPlayer
