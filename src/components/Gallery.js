/* @jsx glam */
import glam from 'glam'
import {graphql} from 'gatsby'
import React, {useState, useContext} from 'react'
import styled, {ThemeContext} from 'styled-components'
import {rgba, getContrast, readableColor} from 'polished'
import Carousel, {Modal, ModalGateway} from 'react-images'
import Img from 'gatsby-image'

import {Wrapper, H1, H3, SubHeading, Container as GalleryContainer} from '../elements'
import {base as themeBase, media, transition} from '../utilities/styles'

const Container = styled(GalleryContainer)`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  columns: 2;
  column-width: ${themeBase.sizes.medium / 2}px;
  /* columns: 2 300px; */
  /* column-gap: 50px; */
  /* column-fill: auto; */
  

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

    padding: 30px 0 30px;
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

    .gatsby-image-wrapper {
      background-color: ${themeBase.colors.white};
    }

    img {
      background-color: ${themeBase.colors.white};
      width: 100%;
      ${transition({})} !important;

      &:hover {
        background-color: ${rgba(themeBase.colors.black, 0.05)};
      }
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
    if (i.asset && i.asset.url) {
      img = {
        source: `${i.asset.url}?w=1920`,
        caption: i.caption
      }
      images.push(img)
    }
  })

  const [modalIsOpen, toggleModal] = useState(false)
  const [selectedIndex, changeSelectedIndex] = useState(0)

  const toggleLightbox = (selectedIndex) => {
    toggleModal(!modalIsOpen)
    changeSelectedIndex(selectedIndex)
  }

  return (
    <Wrapper hasGrid halfSpace>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal
            onClose={() => toggleModal(!modalIsOpen)}
            styles={{
              blanket: base => ({
                ...base,
                backgroundColor: rgba(themeBase.colors.white, 0.9),
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
                }),
                header: base => ({
                  ...base,
                  background: `${themeBase.colors.white} !important`,
                  padding: 20
                }),
                headerClose: base => ({
                  ...base,
                  color: rgba(themeBase.colors.black, 0.7),
                  '&:hover': {
                    color: rgba(themeBase.colors.black, 1)
                  }
                }),
                footer: base => ({
                  ...base,
                  background: `${themeBase.colors.white} !important`,
                  padding: 20
                }),
                footerCaption: base => ({
                  ...base,
                  color: rgba(themeBase.colors.black, 0.7)
                }),
                footerCount: base => ({
                  ...base,
                  color: rgba(themeBase.colors.black, 0.7)
                }),
                headerFullscreen: base => ({
                  ...base,
                  color: rgba(themeBase.colors.black, 0.7),
                  '&:hover': {
                    color: rgba(themeBase.colors.black, 1)
                  }
                }),
                navigation: base => ({
                  ...base,
                  '& button': {
                    color: rgba(themeBase.colors.black, 0.7),
                    backgroundColor: rgba(themeBase.colors.black, 0.1),
                    '&:hover': {
                      backgroundColor: rgba(themeBase.colors.black, 0.2)
                    }
                  }
                }),
                view: base => ({
                  ...base,
                  maxHeight: '100vh',
                  '& img': {
                    maxHeight: '100vh'
                  }
                })
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <Container>
        {data.image.map(({alt, caption, asset, _key}, j) => {
          if (asset && asset.fluid) {
            return (
              <a onClick={() => toggleLightbox(j)} key={_key}>
                <Img
                  alt={caption}
                  fluid={asset.fluid}
                />
              </a>
            )
          }
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
