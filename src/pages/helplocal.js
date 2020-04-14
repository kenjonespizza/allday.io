import React from 'react'
import styled from 'styled-components'
import {rgba, invert} from 'polished'

import Layout from '../components/Layout'
import {Wrapper, Container, H1, H2, H3, H4, SubHeading, HeadingBlock, Button} from '../elements/'
import {darkBase, base, media, mqs, transition, colorsList} from '../utilities/styles'

const Helplocal = () => {
  return (
    <Layout noHelpLocalBanner>
      <Wrapper hasGrid theme={base} noSpace>
        <Container main>
          <FromWrapper>

            <div className='formText'>
                  Fill out this form
            </div>

            <Form name='help-local-contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/helplocal'>

              <input type='hidden' name='bot-field' />
              <input type='hidden' name='form-name' value='help-local-contact' />
              <Field className='field half first'>
                <label htmlFor='name'>Name</label>
                <Input type='text' name='name' id='name' />
              </Field>
              <Field className='field half'>
                <label htmlFor='email'>Email</label>
                <Input type='text' name='email' id='email' />
              </Field>
              <Field className='field'>
                <label htmlFor='message'>Message</label>
                <Input as='textarea' name='message' id='message' rows='6' />
              </Field>

              <Button as='button' type='submit'>
                Send Message
              </Button>

            </Form>
          </FromWrapper>
        </Container>
      </Wrapper>
    </Layout>
  )
}

const FromWrapper = styled.section`
      background-color: ${props => props.theme.colors.background};
      /* border: solid 1px ${props => rgba(props.theme.grid.color, props.theme.grid.opacity)}; */
      border-bottom: none;
      /* padding: ${base.spacings.base}px; */
      display: grid;
      grid-template-columns: 1fr;
      /* box-shadow: 0 10px 100px rgba(0,0,0,.25);
      z-index: 10; */
    
      ${mqs({
          property: 'padding',
          valueBase: `${base.spacings.sectionS}px`,
          valueM: `${base.spacings.sectionS}px`,
          valueL: `${base.spacings.sectionM}px`,
          valueXL: `${base.spacings.sectionL}px`
        })};
    
        ${mqs({
          property: 'padding-left',
          valueBase: `${base.spacings.sectionS / 2}px`,
          valueM: `${base.spacings.sectionS / 2}px`,
          valueL: '0px',
          valueXL: '0px'
        })};
    
        ${mqs({
          property: 'padding-right',
          valueBase: `${base.spacings.sectionS / 2}px`,
          valueM: `${base.spacings.sectionS / 2}px`,
          valueL: '0px',
          valueXL: '0px'
        })};
    
        ${mqs({
          property: 'grid-gap',
          valueBase: `${base.spacings.sectionS / 1}px`,
          valueM: `${base.spacings.sectionS / 1}px`,
          valueL: `${base.spacings.sectionM / 1}px`,
          valueXL: `${base.spacings.sectionL / 1}px`
        })};
    
      ${media.large`
    
        ${props => props.twoColumn ? (`
          grid-template-columns: 1fr 1fr;
        `) : (`
          grid-template-columns: 1fr;
        `)
        }
      `}
    
      .formText {
        /* border-bottom: solid 1px ${props => rgba(props.theme.grid.color, props.theme.grid.opacity)}; */
        /* padding-bottom: 20px;
        margin-bottom: 20px; */
        font-weight: ${base.fontWeights.bold};
        font-size: 19px;
        line-height: 1.5;
    
        ${media.medium`
          font-size: 25px;
        `}
    
        ${media.large`
          grid-column: span 2;
          width: 75%;
          font-size: 35px;
        `}
      }
    `

const Form = styled.form`
      button {
        width: 100%;
    
        ${media.medium`
          width: 50%;
        `}
      }
    `

const Field = styled.div`
      display: flex;
      flex-direction: column;
    
      /* label {
        transform: translateY(50px);
      }
    
      &.focused {
        label {
          transform: translateY(0);
          font-size: 14px;
        }
      } */
    `

const Input = styled.input`
      border: none;
      border-bottom: 3px solid ${props => rgba(props.theme.colors.black, 0.8)};
      /* background-color: ${props => invert(rgba(props.theme.colors.background, 0.025))}; */
      border-radius: 1px;
      padding: 15px;
      margin: 15px 0 30px 1px;
      font-weight: ${base.fontWeights.bold};
      ${transition({})};
    
      &:focus, &:hover {
        border-color: ${base.colors.seal};
      }
    `

const SideBar = styled.div`
      p:first-of-type {
        margin-top: 0;
      }
    `

const Social = styled.div`
      margin-top: 40px;
      ul {
        display: flex;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        margin-top: ${base.spacings.base}px;
        list-style:  none;
        flex-wrap: wrap;
    
        li {
          margin: 0;
          padding-right: 40px;
        }
      }
    
      a:not([class^="Button"]) {
        svg path {
          fill: ${base.colors.black};
          ${transition({})};
        }
    
        &:hover {
          svg path {
            fill: ${props => props.theme.colors.seal};
          }
        }
    
        &.facebook {
          svg path {
            fill: ${colorsList.facebook};
          }
          &:hover {
            svg path {
              fill: ${base.colors.black};
            }
          }
        }
        &.twitter {
          svg path {
            fill: ${colorsList.twitter};
          }
          &:hover {
            svg path {
              fill: ${base.colors.black};
            }
          }
        }
        &.linkedIn {
          svg path {
            fill: ${colorsList.linkedIn};
          }
          &:hover {
            svg path {
              fill: ${base.colors.black};
            }
          }
        }
        &.instagram {
          svg path {
            fill: ${colorsList.instagram};
          }
          &:hover {
            svg path {
              fill: ${base.colors.black};
            }
          }
        }
        &.dribbble {
          svg path {
            fill: ${colorsList.dribbble};
          }
          &:hover {
            svg path {
              fill: ${base.colors.black};
            }
          }
        }
      }
    `

export default Helplocal

const HelplocalWrap = styled.section`

`
