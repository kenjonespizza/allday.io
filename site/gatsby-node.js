exports.createPages = async ({actions: {createPage}, graphql, reporter}) => {
  const results = await graphql(`
    {
      allSanityPages(filter: {pageInfo: {slug: {current: {ne: null}}}}) {
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

  if (results.errors) throw results.errors

  const pages = results.data.allSanityPages.edges

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
}
