/* @jsx glam */
import glam from 'glam'
import React, {useState} from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Carousel, {Modal, ModalGateway} from 'react-images'
import Img from 'gatsby-image'

import {Wrapper, H1, H3, SubHeading, Container as Gallery1Container} from '../elements'
import {base as themeBase} from '../utilities/styles'

const Container = styled(Gallery1Container)`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  columns: 2 calc(${themeBase.sizes.medium}px / 2);
  /* columns: 2 300px; */
  column-gap: 50px;
  column-fill: auto;

  & > h1, 
  & > h2, 
  & > h3, 
  & > h4, 
  & > h5, 
  & > h6 {
    color: ${props => props.theme.colors.text};
    margin-top: 0;
  }
  
  & > a {
    /* grid-column: span 1; */
    margin-bottom: 50px;
    cursor: pointer;
    display: block;

    img {
      width: 100%;
    }
  }

  strong {
    color: ${props => props.theme.colors.accent};
  }
`

const Gallery1 = ({data}) => {
  var images = []
  var img = {}

  data.image.map((i) => {
    img = {
      source: i.asset.url,
      caption: i.caption
    }
    images.push(img)
  })

  // const images = [
  //   {
  //     source: 'https://images.unsplash.com/photo-1556910109-a14b4226abff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  //     caption: 'Want Branding Example 1'
  //   },
  //   {
  //     source: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  //     caption: 'Want Branding Example 2'
  //   },
  //   {
  //     source: 'https://images.unsplash.com/photo-1565210339691-46c2d66d0ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
  //     caption: 'Want Branding Example 3'
  //   },
  //   {
  //     source: 'https://images.unsplash.com/photo-1565207470645-0c3bff5d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  //     caption: 'Want Branding Example 4'
  //   }]

  const [modalIsOpen, toggleModal] = useState(false)
  const [selectedIndex, changeSelectedIndex] = useState(0)

  const toggleLightbox = (selectedIndex) => {
    toggleModal(!modalIsOpen)
    changeSelectedIndex(selectedIndex)
  }

  return (
    <Wrapper hasGrid noSpace>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal
            onClose={() => toggleModal(!modalIsOpen)}
            styles={{
              blanket: base => ({
                ...base,
                backgroundColor: themeBase.colors.black,
                zIndex: 21
              }),
              positioner: base => ({
                ...base,
                zIndex: 22
              })
            }}
          >
            <Carousel
              views={images}
              currentIndex={selectedIndex}
              styles={{
                container: base => ({
                  ...base,
                  zIndex: 22
                })
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <Container>
        {data.image.map(({alt, caption, asset, _key}, j) => {
          return (
            <a onClick={() => toggleLightbox(j)} key={_key}>
              <img
                alt={caption}
                src={asset.url}
              />
            </a>
          )
        })}
        {/* <a onClick={() => toggleLightbox(1)}>
          <img src='https://images.unsplash.com/photo-1556910109-a14b4226abff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
        </a>
        <a onClick={() => toggleLightbox(2)}>
          <img src='https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' />
        </a>
        <a onClick={() => toggleLightbox(3)}>
          <img src='https://images.unsplash.com/photo-1565210339691-46c2d66d0ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80' />
        </a>
        <a onClick={() => toggleLightbox(4)}>
          <img src='https://images.unsplash.com/photo-1565207470645-0c3bff5d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' />
        </a> */}
      </Container>
    </Wrapper>
  )
}

export default Gallery1
