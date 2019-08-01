import React from 'react'

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
