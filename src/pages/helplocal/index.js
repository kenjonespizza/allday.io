import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {rgba, invert} from 'polished'

import {BrandThemeContext} from '../../utilities/context'
import {getContrastTextColor} from '../../utilities/helpers'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import {Wrapper, Container, H1, H2, H3, H4, SubHeading, HeadingBlock, Button, ColorWrap} from '../../elements/'
import {darkBase, base, media, mqs, transition, colorsList} from '../../utilities/styles'

const Helplocal = (props) => {
  var brandBase = {
    ...base, // copy everything from base
    colors: {// override the colors property
      ...base.colors, // copy the everything from base.colors
      accent: colorsList.helpLocal, // override base.colors.accent
      useSpecial: true
    }
  }

  var darkBrandBase = {
    ...darkBase, // copy everything from base
    colors: {// override the colors property
      ...darkBase.colors, // copy the everything from base.colors
      accent: colorsList.helpLocal, // override base.colors.accent
      background: colorsList.helpLocal, // override base.colors.accent
      text: getContrastTextColor(colorsList.helpLocal), // override base.colors.accent
      useSpecial: true
    },
    grid: {
      ...darkBase.grid,
      color: getContrastTextColor(colorsList.helpLocal) // override base.colors.accent
    }
  }

  const brandTheme = {overrideTheme: true, light: brandBase, dark: darkBrandBase}

  const heroData = {
    headingBlock: {
      subHeading: 'Would you benefit from an online donations page?',
      heading: "Let's get started"
    },
    heroImage: null,
    imagePosition: null,
    isDark: true
  }

  const heroRawData = {
    text: null
  }

  // [{
  //   style: 'normal',
  //   _type: 'block',
  //   markDefs: [],
  //   children: [
  //     {
  //       _type: 'span',
  //       text: 'Every penny helps us in this time of need. ',
  //       marks: []
  //     }
  //   ]
  // }]

  const seo = {
    title: 'HelpLocal: Sign up for a free donation page',
    url: 'https://allday.io/helplocal',
    type: '',
    keywords: ['HelpLocal', 'Donation Page', 'COVIDE-19', 'Coronavirus'],
    index: '',
    follow: '',
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
        <ColorWrap color={colorsList.helpLocal} textColor={colorsList.white}>
          <BrandThemeContext.Provider value={brandTheme}>
            <Wrapper hasGrid theme={brandTheme.dark}>
              <Container>
                <ThinText>
                  <SubHeading>{heroData.headingBlock.subHeading}</SubHeading>
                  <H1>{heroData.headingBlock.heading}</H1>
                </ThinText>
              </Container>
            </Wrapper>
          </BrandThemeContext.Provider>
        </ColorWrap>
        <Wrapper hasGrid>
          <Container>
            <ThinText>
              <p>Hi there!  If, you've made it to this page, then you're unfortunately feeling the affects COVID-19 is having on our economy.  We'd love to help out by providing your business with a <strong>free donations web page</strong> to network and collect donations for your business.  <a href='https://helplocal.us/chucktown-styles' target='_blank' rel='noopener noreferrer'>Checkout the donation page demo!</a></p>
              <p>To get started, we'll just need to collect a little information about you and your business.  After you complete the form below, we'll send you a link where you can provide the remainder of your information.  One other thing you will need is a PayPal account.  The way that we tie the donation form to your PayPal account is by programming in the email address that is associated to your PayPal account.</p>
              <p>Once someone fills out your donation form they will be redirected to PayPal to complete the transaction.  No fund ever goes through our hand.  Checkout our <a href='https://helplocal.us#faq' target='_blank' rel='noopener noreferrer'>Frequently Asked Questions</a> for more information.</p>
              <p>Just so you, we are AllDay!  We are small (two person) team that focuses on making great & affordable websites for small businesses.  <Link to='/design-architects'>Learn more about us.</Link></p>
            </ThinText>
          </Container>

          <Container main>
            <FromWrapper>
              <ThinText>
                <Form name='help-local-contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' action='/helplocal'>

                  <input type='hidden' name='bot-field' />
                  <input type='hidden' name='form-name' value='help-local-contact' />

                  <Field className='field half first'>
                    <label htmlFor='name'>Name</label>
                    <Input type='text' name='name' id='name' required />
                  </Field>
                  <Field className='field half'>
                    <label htmlFor='email'>Email</label>
                    <Input type='text' name='email' id='email' required />
                  </Field>

                  {/* <Field className='field'>
                <label htmlFor='message'>Message</label>
                <Input as='textarea' name='message' id='message' rows='6' />
              </Field> */}

                  <Field>
                    <label htmlFor='paypal'>
                      <input type='checkbox' required name='paypal' id='paypal' /> <span className='checkBoxDescription'>I understand that I will need a business PayPal account prior to signing up.</span>
                    </label>
                  </Field>
                  <br />

                  <Button as='button' type='submit'>
                    Send Message
                  </Button>

                </Form>
              </ThinText>
            </FromWrapper>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

const FromWrapper = styled.section`
      /* background-color: ${props => props.theme.colors.background}; */
      /* border: solid 1px ${props => rgba(props.theme.grid.color, props.theme.grid.opacity)}; */
      border-bottom: none;
      /* padding: ${base.spacings.base}px; */
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 30px;
      /* box-shadow: 0 10px 100px rgba(0,0,0,.25);
      z-index: 10; */
    

    
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
        text-align: left;
      }
    
      &.focused {
        label {


        }
      }

      .checkBoxDescription {
        font-size: ${props => props.theme.fontSizes.small};
        margin-left: 10px;
      }
    `

const Input = styled.input`
      border: none;
      border: 3px solid ${props => rgba(props.theme.colors.black, 0.8)};
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

const ThinText = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;

  ${H1} {
    margin-top: 10px;
  }

  strong {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  a {
    color: ${colorsList.helpLocal} !important;
    font-weight: ${props => props.theme.fontWeights.semibold};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  ${media.medium`
    grid-template-columns: 1fr 1fr;
  `}

  input, select {
    width: 100%;
    margin-bottom: 0;
  }
`

export default Helplocal

const HelplocalWrap = styled.section`

`
