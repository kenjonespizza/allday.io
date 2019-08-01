// import React from 'react'
// import {StaticQuery, graphql, useStaticQuery} from 'gatsby'
// import {ThemeProvider} from 'styled-components'

// import Layout from '../components/Layout'
// import {Heading, H1, H2, H3, H4, H5, H6, Button, Wrapper, HeadingBlock} from '../elements'
// import {base, darkPulp, lightWatermelly} from '../utilities/styles'
// import HeroHome from '../components/HeroHome'
// import ServicesBlock from '../components/ServicesBlock'
// import CaseStudiesBlock from '../components/CaseStudiesBlock'
// import ReviewsBlock from '../components/ReviewsBlock'
// import {ReactDOM} from 'react-dom'

// export default () => {
//   const data = useStaticQuery(graphql`
//     query HeaderQuery {
//       page: sanityHomepage {
//     blocks {
//       blocks {
//         ... on SanityHeadingBlock {
//           _key
//           _type
//           heading
//           subHeading
//         }
//         ... on SanityHeroHome {
//           _key
//           _type
//           mainText
//           button {
//             buttonText
//             buttonIcon
//             url
//             slug {
//               current
//             }
//           }
//           imageLeft {
//             alt
//             asset {
//               fluid(maxWidth: 2000) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//           imageRight {
//             alt
//             asset {
//               fluid(maxWidth: 2000) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//     }
//   `)
//   // console.log('data:', data)
//   const {blocks} = data.page.blocks
//   console.log('blocks:', blocks)
//   var Component = ''
//   return (
//     <>
//       <Layout>

//         <Wrapper hasGrid theme={base} noSpace>

//           <div className='TEST'>

//             {blocks.map(block => {
//               if (typeof block._type !== 'undefined') {
//                 console.log('block:', block)
//                 const name = block._type
//                 Component = name.charAt(0).toUpperCase() + name.slice(1)
//                 console.log('Component:', Component)

//                 switch (Component) {
//                   case 'HeroHome':
//                     return <HeroHome key={block._key} data={block} />
//                   case 'warning':
//                     return <HeadingBlock key={block._key} />
//                   default:
//                     return null
//                 }
//                 // document.getElementById('root')

//               // return (
//               //   <Component />
//               // )
//               }
//             })}
//             {/* <HeroHome />
//           <ServicesBlock />
//           <CaseStudiesBlock />
//           <ReviewsBlock /> */}

//           </div>
//         </Wrapper>

//       </Layout>
//     </>
//   )
// }

// // const detailsQuery = graphql`
// //   query DefaultSEOQuery {
// //     site: sanitySiteSettings(id: {eq: "8dbf3659-1c35-5ffd-acb0-4d87c935c20f"}) {
// //       title
// //     }
// //   }
// // `
