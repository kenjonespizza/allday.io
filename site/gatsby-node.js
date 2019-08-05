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
    const slug = `service/${page.slug.current}`

    reporter.info(`Creating service page: ${slug}`)

    createPage({
      path: slug,
      component: require.resolve('./src/templates/service.js'),
      context: {
        slug
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
