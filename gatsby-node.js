// Create Pages from Sanity "Pages"
exports.createPages = async ({actions: {createPage}, graphql, reporter}) => {
  const pagesResults = await graphql(`
    {
      pages: allSanityPages(filter: {pageInfo: {slug: {current: {ne: null}}}}) {
        edges {
          node {
            pageInfo {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  if (pagesResults.errors) throw pagesResults.errors

  const pages = pagesResults.data.pages.edges

  pages.forEach(edge => {
    const page = edge.node
    const slug = page.pageInfo.slug.current

    reporter.info(`Creating page: ${slug}`)

    createPage({
      path: slug,
      component: require.resolve('./src/templates/page.js'),
      context: {
        slug,
        pageType: 'page'
      }
    })
  })

  const servicesResults = await graphql(`
    {
      services: allSanityServices(filter: {pageInfo: {slug: {current: {ne: null}}}}) {
        edges {
          node {
            pageInfo {
              pageName
              slug {
                current
              }
            }
          }
          next {
            pageInfo {
              pageName
              slug {
                current
              }
            }
          }
          previous {
            pageInfo {
              pageName
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  if (servicesResults.errors) throw servicesResults.errors

  const services = servicesResults.data.services.edges

  services.forEach(edge => {
    const page = edge.node
    const slug = `services/${page.pageInfo.slug.current}`
    const slugName = page.pageInfo.slug.current
    const next = edge.next
    const previous = edge.previous

    reporter.info(`Creating service page: ${slug}`)

    createPage({
      path: slug,
      component: require.resolve('./src/templates/service.js'),
      context: {
        slugName,
        slug,
        next,
        previous,
        pageType: 'services'
      }
    })
  })

  const caseStudiesResults = await graphql(`
    {
      caseStudies: allSanityCaseStudies(filter: {pageInfo: {slug: {current: {ne: null}}}}) {
        edges {
          node {
            pageInfo {
              slug {
                current
              }
            }
          }
          next {
            pageInfo {
              pageName
              slug {
                current
              }
            }
            color {
              hex
            }
          }
          previous {
            pageInfo {
              pageName
              slug {
                current
              }
            }
            color {
              hex
            }
          }
        }
      }
    }
  `)

  if (caseStudiesResults.errors) throw caseStudiesResults.errors

  const caseStudies = caseStudiesResults.data.caseStudies.edges

  caseStudies.forEach(edge => {
    const page = edge.node
    const slug = `work-samples/${page.pageInfo.slug.current}`
    const slugName = page.pageInfo.slug.current
    const next = edge.next
    const previous = edge.previous

    reporter.info(`Creating Case Study page: ${slug}`)

    createPage({
      path: slug,
      // component: require.resolve('./src/templates/sample.js'),
      component: require.resolve('./src/templates/sample.js'),
      context: {
        slug: slugName,
        next,
        previous,
        pageType: 'caseStudy'
      }
    })
  })
}

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /flickity/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
