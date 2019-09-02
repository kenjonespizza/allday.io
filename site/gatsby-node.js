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
        slug
      }
    })
  })

  const servicesResults = await graphql(`
    {
      services: allSanityServices(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            slug {
              current
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
    const slug = `services/${page.slug.current}`
    const slugName = page.slug.current

    reporter.info(`Creating service page: ${slug}`)

    createPage({
      path: slug,
      component: require.resolve('./src/templates/service.js'),
      context: {
        slugName
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
        }
      }
    }
  `)

  if (caseStudiesResults.errors) throw caseStudiesResults.errors

  const caseStudies = caseStudiesResults.data.caseStudies.edges

  caseStudies.forEach(edge => {
    const page = edge.node
    const slug = `sample/${page.pageInfo.slug.current}`
    const slugName = page.pageInfo.slug.current

    reporter.info(`Creating Case Study page: ${slug}`)

    createPage({
      path: slug,
      component: require.resolve('./src/templates/sample.js'),
      context: {
        slug: slugName
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
