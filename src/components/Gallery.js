/* @jsx glam */
import glam from 'glam'
import {graphql} from 'gatsby'
import React, {useState} from 'react'
import styled from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Carousel, {Modal, ModalGateway} from 'react-images'
import Img from 'gatsby-image'

import {Wrapper, H1, H3, SubHeading, Container as GalleryContainer} from '../elements'
import {base as themeBase, media} from '../utilities/styles'

const Container = styled(GalleryContainer)`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  columns: 2 calc(${themeBase.sizes.medium}px / 2);
  /* columns: 2 300px; */
  /* column-gap: 50px; */
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
    &:first-of-type {
      column-span: all;
    }

    padding: 0 0 30px;
    /* grid-column: span 1; */
    /* margin-bottom: 50px; */
    cursor: pointer;
    display: block;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;

    ${media.medium`
      padding: 25px;
    `}

    & > div {
      /* overflow: visible !important; */
      box-shadow: 0px 5px 20px rgba(2, 22, 30, 0.2);
    }

    img {
      width: 100%;
    }
  }

  strong {
    color: ${props => props.theme.colors.accent};
  }
`

const Gallery = ({data}) => {
  var images = []
  var img = {}

  data.image.map((i) => {
    img = {
      source: `${i.asset.url}?w=1920`,
      caption: i.caption
    }
    images.push(img)
  })

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
              <Img
                alt={caption}
                fluid={asset.fluid}
              />
            </a>
          )
        })}
      </Container>
    </Wrapper>
  )
}

export default Gallery

export const query = graphql`
  fragment GalleryFragment on SanityGallery {
    _key
    _type
    image {
      _key
      caption
      alt
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
        _id
        url
      }
    }
  }
`
