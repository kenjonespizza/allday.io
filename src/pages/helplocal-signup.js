import React from 'react'
import styled from 'styled-components'
import {rgba, invert} from 'polished'
import InputColor from 'react-input-color'

import Layout from '../components/Layout'
import {Wrapper, Container, H1, H2, H3, H4, SubHeading, HeadingBlock, Button} from '../elements/'
import {darkBase, base, media, mqs, transition, colorsList} from '../utilities/styles'

const Helplocal = () => {
  const [color, setColor] = React.useState({})

  return (
    <Layout noHelpLocalBanner>
      <Wrapper hasGrid theme={base} noSpace>
        <Container main>
          <FromWrapper>

            <div className='formText'>
                  Fill out this form
            </div>

            <Form name='help-local-signup' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/helplocal'>

              <input color={color.rgba} type='hidden' name='bot-field' />
              <input color={color.rgba} type='hidden' name='form-name' value='help-local-signup' />

              <Field className='field'>
                <label htmlFor='contactName'>Your name*</label>
                <Descriptor>This won't be displayed your donation page.  This is just in case we need to get in touch with you.</Descriptor>
                <Input color={color.rgba} type='text' name='contactName' id='contactName' required />
              </Field>

              <Field className='field'>
                <label htmlFor='contactEmail'>Your email address*</label>
                <Descriptor>This won't be displayed your donation page.  This is just in case we need to get in touch with you.</Descriptor>
                <Input color={color.rgba} type='email' name='contactEmail' id='contactEmail' required />
              </Field>

              <Field className='field'>
                <label htmlFor='businessName'>Business name*</label>
                <Descriptor>This will be displayed on your donation form.</Descriptor>
                <Input color={color.rgba} type='text' name='businessName' id='businessName' required />
              </Field>

              <Field className='field'>
                <label htmlFor='businessWebsite'>URL to your website</label>
                <Descriptor>Optional.  We will link your logo to your website.</Descriptor>
                <Input color={color.rgba} type='url' name='businessWebsite' id='businessWebsite' placeholder='https://www.yourbusines.com' />
              </Field>

              <Field className='field'>
                <label htmlFor='businessName'>Business Twitter handel</label>
                <Descriptor>Optional.  This will be used to help generate a preview if someone shares your donation pages's URL on Twitter.</Descriptor>
                <Input color={color.rgba} type='text' name='businessName' id='businessName' />
              </Field>

              <Field className='field'>
                <label htmlFor='logo'>Upload your logo</label>
                <Descriptor>Optional.  This will show on the donation form.  For best results, please upload a transparent <strong>.svg</strong>/<strong>.png</strong>,<strong>.webp</strong>, or a <strong>.jpg</strong> on a white background.</Descriptor>
                <Input color={color.rgba} type='file' accept='.png, .jpg, .jpeg, .webp, .svg' name='logo' id='logo' />
              </Field>

              <Field className='field'>
                <label htmlFor='businessName'>Your <ColorSpan color={color.rgba}>primary</ColorSpan> brand color</label>
                <Descriptor>Optional.  This will just help your donation page look nicer and on brand.</Descriptor>
                {/* <Input color={color.rgba} type='text' name='businessName' id='businessName' /> */}

                <InputColor
                  initialValue='#00B4BF'
                  onChange={setColor}
                  placement='right'
                />
                {/* <div
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 20,
                      backgroundColor: color.rgba
                    }}
                  />
                </div> */}
              </Field>

              <Field className='field'>
                <label htmlFor='message'>Message</label>
                <Input color={color.rgba} as='textarea' name='message' id='message' rows='6' />
              </Field>

              <Button as='button' type='submit' customBackgroundColor={color.rgba}>
                Send Message
              </Button>

            </Form>
          </FromWrapper>
        </Container>
      </Wrapper>
    </Layout>
    // businessName -
    // paypalEmail
    // businessWebsite -
    // contactName -
    // contactEmail -
    // twitterHandel -
    // logo -
    // primaryColor
    // heading
    // content
    // image
    // donationPurpose
    // donationDescription
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
    
      label {
        /* transform: translateY(50px); */
        font-weight: ${props => props.theme.fontWeights.semibold};
        text-transform: uppercase;
      }
    `

const Input = styled.input`
      border: none;
      border-bottom: 3px solid ${props => props.color ? props.color : rgba(props.theme.colors.black, 0.8)};
      /* background-color: ${props => invert(rgba(props.theme.colors.background, 0.025))}; */
      border-radius: 1px;
      padding: 15px;
      margin: 15px 0 30px 1px;
      font-weight: ${base.fontWeights.bold};
      font-size: 17px;
      font-weight: ${props => props.theme.fontWeights.medium};
      ${transition({})};
    
      &:focus, &:hover {
        border-color: ${base.colors.seal};
      }

      &::placeholder {
        opacity: .25;
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

const Descriptor = styled.span`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  opacity: .7;
`

const ColorSpan = styled.span`
  color: ${props => props.color ? props.color : props.theme.colors.text};
`

export default Helplocal

const HelplocalWrap = styled.section`

`
