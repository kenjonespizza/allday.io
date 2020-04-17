import React from 'react'
import styled from 'styled-components'
import {rgba, invert, getContrast, getColorContrast} from 'polished'
import InputColor from 'react-input-color'
import sanityClient from '@sanity/client'
import slugify from 'slugify'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import {Wrapper, Container, H1, H2, H3, H4, SubHeading, HeadingBlock, Button} from '../../elements/'
import {darkBase, base, media, mqs, transition, colorsList} from '../../utilities/styles'

const Helplocal = (props) => {
  const [color, setColor] = React.useState({})
  const [formFields, setFormFields] = React.useState({})
  console.log('formFields:', formFields)

  const client = sanityClient({
    projectId: process.env.HELPLOCAL_SANITY_PROJECT_ID,
    dataset: process.env.HELPLOCAL_SANITY_DATASET,
    token: process.env.HELPLOCAL_SANITY_READ_TOKEN, // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
  })

  // console.log('HELPLOCAL_SANITY_PROJECT_ID:', process.env.HELPLOCAL_SANITY_PROJECT_ID)
  // console.log('HELPLOCAL_SANITY_PROJECT_ID:', process.env.HELPLOCAL_SANITY_DATASET)
  // console.log('HELPLOCAL_SANITY_PROJECT_ID:', process.env.HELPLOCAL_SANITY_READ_TOKEN)

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(event)

    const doc = {
      _type: 'sites',
      isActive: false,
      heading: 'Please Donate to help us stay in business.',
      content: [{
        style: 'normal',
        _type: 'block',
        markDefs: [],
        children: [
          {
            _type: 'span',
            text: 'Every penny helps us in this time of need. ',
            marks: []
          }
        ]
      }],
      donationPurpose: 'COVID-19 Relief',
      donationDescription: 'Website Donation',
      amounts: [5, 10, 50, 100, 500],
      slug: {
        current: ''
      },
      primaryColor: {
        hex: ''
      }
    }

    Object.keys(formFields).forEach(field => {
      if (field !== 'logo' && field !== 'image') {
        doc[field] = formFields[field]
      }
    })

    // Set Color
    doc.primaryColor.hex = color.hex

    // Set slug
    const slug = slugify(formFields.businessName, {
      replacement: '-', // replace spaces with replacement
      remove: /[*+~.,;()'"!:@]/g, // regex to remove characters
      lower: true // result in lower case
    })
    doc.slug.current = slug

    // doc.newsletter = formFields.newsletter === 'on'

    // Grab that logo file
    const logoFile = document.querySelector('input[name=logo]').files[0]
    const imageFile = document.querySelector('input[name=image]').files[0]

    console.log('doc:', doc)
    client.create(doc).then(res => {
      console.log(`Site was created, document ID is ${res._id}`)

      if (logoFile) {
        client.assets
          .upload('image', logoFile)
          .then(document => {
            console.log('The file was uploaded!', document)
            // document._type = 'image'
            client.patch(res._id)
              .set({
                logo: {
                  _type: 'image',
                  asset: {
                    _type: 'reference',
                    _ref: document._id
                  }
                }
              })
              .commit()
              .then(addedLogo => {
                console.log('Logo Added')
                console.log(addedLogo)
              })
              .catch(error => {
                console.error('Logo Upload failed:', error.message)
              })
          })
          .catch(error => {
            console.error('Logo Upload failed:', error.message)
          })
      }

      if (imageFile) {
        client.assets
          .upload('image', imageFile)
          .then(document => {
            console.log('The file was uploaded!', document)
            // document._type = 'image'
            client.patch(res._id)
              .set({
                image: {
                  _type: 'image',
                  asset: {
                    _type: 'reference',
                    _ref: document._id
                  }
                }
              })
              .commit()
              .then(addedImage => {
                console.log('Image Added')
                console.log(addedImage)
              })
              .catch(error => {
                console.error('Image Upload failed:', error.message)
              })
          })
          .catch(error => {
            console.error('Image Upload failed:', error.message)
          })
      }
    }).catch(err => {
      console.error('Transaction failed: ', err.message)
    })
  }

  const returnBetterContrast = (color) => {
    if (color && color.hex && base.colors.white) {
      const onLight = getContrast(color.hex, base.colors.white)
      const onDark = getContrast(color.hex, base.colors.black)

      if (onDark > onLight) {
        return ('dark')
      } else {
        return ('light')
      }
    }

    return ('light')
  }

  const updateField = e => {
    if (e.target.name === 'newsletter') {
      setFormFields({
        ...formFields,
        [e.target.name]: e.target.checked
      })
    } else {
      setFormFields({
        ...formFields,
        [e.target.name]: e.target.value
      })
    }
  }

  const statesArray = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  const seo = {
    title: 'HelpLocal: Sign up for a free donation page',
    url: 'https://allday.io/helplocal',
    type: '',
    keywords: ['HelpLocal', 'Donation Page', 'COVIDE-19', 'Coronavirus'],
    index: false,
    follow: false,
    image: {
      asset: {
        url: 'https://allday.io/images/og-image.jpg'
      }
    },
    description: 'If, you\'ve made it to this page, then you\'re unfortunately feeling the affects COVID-19 is having on our economy.  We\'d love to help out by providing your business with a free donations web page to network and collect donations for your business.',
    author: 'AllDay'
  }

  return (
    <>
      {seo && <Seo context={props.pageContext} {...seo} />}
      <Layout noHelpLocalBanner>
        <Wrapper hasGrid theme={returnBetterContrast(color) === 'light' ? base : darkBase}>
          <ContainerStyled main>
            <H1 className='formText'>
              Sign up using the form below.
            </H1>

            <p>We need just a bit of information from you.  If you have any questions while filling out the form, drop us an email and let us know! <a href='mailto:team@helplocal.us'>team@helplocal.us</a>.</p>
            <FromWrapper>

              <Form name='help-local-signup' onSubmit={handleSubmit}>

                <Field className='field'>
                  <label htmlFor='contactName'>Your name*</label>
                  <Descriptor>This won't be displayed your donation page.  This is just in case we need to get in touch with you.</Descriptor>
                  <Input color={color.hex} type='text' name='contactName' id='contactName' notrequired onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='contactEmail'>Your email address*</label>
                  <Descriptor>This won't be displayed your donation page.  This is just in case we need to get in touch with you.</Descriptor>
                  <Input color={color.hex} type='email' name='contactEmail' id='contactEmail' notrequired onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='need'>Tell us why you need this page</label>
                  <Descriptor>Just a short description of hardship your business is facing.  We won't judge 😊, we just use this so we can add a short summary to your donation page</Descriptor>
                  <Input color={color.hex} as='textarea' name='need' id='need' rows='6' placeholder='COVID-19 has forced us to close our doors.  We are having trouble paying our employees and staying in business.' onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='businessName'>Your brand's <ColorSpan color={color.hex}>primary color</ColorSpan></label>
                  <Descriptor>Optional.  This will just help your donation page look nicer and on brand.</Descriptor>

                  <InputColorStyled
                    initialValue='#00B4BF'
                    onChange={setColor}
                    placement='right'
                  />
                </Field>
                <br />

                <Field className='field'>
                  <label htmlFor='businessName'>Business name*</label>
                  <Descriptor>This will be displayed on your donation form.</Descriptor>
                  <Input color={color.hex} type='text' name='businessName' id='businessName' notrequired onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='businessWebsite'>URL to your website</label>
                  <Descriptor>Optional.  We will link your logo to your website.</Descriptor>
                  <Input color={color.hex} type='url' name='businessWebsite' id='businessWebsite' placeholder='https://www.yourbusines.com' onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='twitterHandel'>Business Twitter handel</label>
                  <Descriptor>Optional.  This will be used to help generate a preview if someone shares your donation page's URL on Twitter.</Descriptor>
                  <Input color={color.hex} type='text' name='twitterHandel' id='twitterHandel' onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='logo'>Upload your business's logo</label>
                  <Descriptor>Optional.  This will show on the donation form.  For best results, please upload a transparent <strong>.png</strong>,<strong>.webp</strong>, or a <strong>.jpg</strong> on a white background.</Descriptor>
                  <Input color={color.hex} type='file' accept='.png, .jpg, .jpeg, .webp' name='logo' id='logo' onChange={updateField} />
                </Field>

                {/* <Field className='field'>
                <label htmlFor='heading'>Donation page heading text</label>
                <Descriptor>This is the main headline on your donation page.</Descriptor>
                <Input color={color.hex} type='text' name='heading' id='heading' placeholder='Please donate to help us stay in business.' onChange={updateField} />
              </Field>

              <Field className='field'>
                <label htmlFor='content'>Donation page Content</label>
                <Input color={color.hex} as='textarea' name='content' id='content' rows='6' placeholder='Every penny helps us in this time of need.' onChange={updateField} />
              </Field> */}

                <Field className='field'>
                  <label htmlFor='image'>Upload an image to use.*</label>
                  <Descriptor>If you don't have a nice large image, you can find a nice, royalty free image on <a href='https://unsplash.com' target='_blank' rel='noopener noreferrer'>unsplash.com</a>. Put the link in the field below.</Descriptor>
                  <Input color={color.hex} type='file' accept='.png, .jpg, .jpeg, .webp, .svg' name='image' id='image' onChange={updateField} />
                  <Input color={color.hex} type='text' name='imageLink' id='imageLink' placeholder='https://unsplash.com/photos/N04FIfHhv_k' onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='paypalEmail'>PayPal email address*</label>
                  <Descriptor>The email address you use to log into PayPal.  This is used to tie the form to your business's PayPal account.  <a href='#'>Create a PayPal Account</a></Descriptor>
                  <Input color={color.hex} type='email' name='paypalEmail' id='paypalEmail' notrequired onChange={updateField} />
                </Field>

                <Field className='field'>
                  <label htmlFor='city'>What city & state are you based out of?</label>
                  <Descriptor>Optional.  This is just for our internal records incase we have the opportunity to group local businesses.</Descriptor>
                  <Grid>
                    <div>
                      <Input color={color.hex} type='text' name='city' id='city' placeholder='City' notrequired onChange={updateField} />
                    </div>
                    <div>
                      <Input as='select' color={color.hex} type='text' name='state' id='state' notrequired onChange={updateField}>
                        <option value=''>Please select a state</option>
                        {statesArray.map((state, i) => (<option key={i} value={state}>{state}</option>))}
                      </Input>
                    </div>
                  </Grid>
                </Field>

                <Field>
                  <label htmlFor='approved'>
                    <input type='checkbox' required name='approved' id='approved' /> <span className='checkBoxDescription'>I approve AllDay to store & use this information to create my donation page.  If 'No', this is kinda a deal breaker 😜</span>
                  </label>
                  <label htmlFor='newsletter'>
                    <input onChange={updateField} type='checkbox' name='newsletter' id='newsletter' /> <span className='checkBoxDescription'>I would like to be added to the AllDay newsletter.</span>
                  </label>
                </Field>
                <br />

                <Button color={returnBetterContrast(color) === 'dark' ? 'white' : 'black'} as='button' type='submit' customBackgroundColor={color.hex}>
                  Submit
                </Button>

              </Form>
            </FromWrapper>
          </ContainerStyled>
        </Wrapper>
      </Layout>
    </>
  )
}

const InputColorStyled = styled(InputColor)`
  height: 200px;
`

const ContainerStyled = styled(Container)`
a {
    /* color: ${colorsList.helpLocal} !important; */
    font-weight: ${props => props.theme.fontWeights.semibold};
  }
`

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
          property: 'padding-top',
          valueBase: `${base.spacings.sectionS / 2}px`,
          valueM: `${base.spacings.sectionS / 2}px`,
          valueL: `${base.spacings.sectionM / 2}px`,
          valueXL: `${base.spacings.sectionL / 2}px`
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
        /* text-transform: uppercase; */
      }

      .checkBoxDescription {
        font-size: ${props => props.theme.fontSizes.small};
        margin-left: 10px;
      }
    `

const Input = styled.input`
      border: none;
      border: 3px solid ${props => props.color ? props.color : rgba(props.theme.colors.black, 0.8)};
      /* background-color: ${props => invert(rgba(props.theme.colors.background, 0.025))}; */
      border-radius: 1px;
      padding: 15px;
      margin: 15px 0 30px 1px;
      font-weight: ${base.fontWeights.bold};
      font-size: 17px;
      font-weight: ${props => props.theme.fontWeights.medium};
      ${transition({})};
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
    
      &:focus, &:hover {
        border-color: ${props => props.color ? props.theme.colors.text : base.colors.seal};
      }

      &::placeholder {
        opacity: .5;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}

  input, select {
    width: 100%;
    height: 63px;
  }
`

const ButtonStyled = styled(Button)`
  color: ${props => props.theme.colors.background};
`

export default Helplocal

const HelplocalWrap = styled.section`

`
