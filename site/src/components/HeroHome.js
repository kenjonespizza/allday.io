import React, {useEffect, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const HeroHomeWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`

const Side = styled.figure`
  height: 100%;
  width: calc(50vw - 10px);
  background-color: ${props => props.theme.colors.seal};
  margin: 0;
`

const HeroHome = () => {
  // useEffect(() => {
  //   return function handelNavHeight () {
  //     const navBarHeight = setNavHeight(document.getElementById('nav-bar').offsetHeight)

  //     return navBarHeight
  //     const HeroHomeWrapperEl = document.getElementById('HeroHomeWrapperEl')
  //     HeroHomeWrapperEl.style.height = navBarHeight + 'px'
  //   }
  // })

  // const data = useStaticQuery(graphql`
  //   query HERO_HOME_QUERY {
  //     hero:
  //   }
  // `)

  return (
    <HeroHomeWrapper id='HeroHomeWrapperEl'>
      <Side />
      <Side />
    </HeroHomeWrapper>
  )
}

export default HeroHome
