import {format, isFuture} from 'date-fns'

export function addNavHeightToWrapper () {
  const navBarHeight = document.getElementById('nav-bar').offsetHeight
  const rappersDelight = document.getElementById('rappers-delight')
  rappersDelight.style.paddingTop = navBarHeight + 'px'
}

export function getNavHeight () {
  const navBarHeight = document.getElementById('nav-bar').offsetHeight
  return navBarHeight
}

export function reColorPunctuation () {
  function addAccent (str) {
    return '<span class="accent">' + str + '</span>'
  }

  const headerEls = document.querySelectorAll('#HeadingBlock h2')
  let textToFilter = ''

  headerEls.forEach(el => {
    textToFilter = el.innerText

    if (typeof textToFilter === 'string' || textToFilter instanceof String) {
      const filteredText = textToFilter.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, addAccent)
      el.innerHTML = filteredText
    } else {
    }
  })
}

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(publishedAt)
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj (source) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}
