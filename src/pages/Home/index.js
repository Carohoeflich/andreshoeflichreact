import React from 'react'
import Nav from '../../components/Nav/Nav'
import Landing from '../../components/Landing/landing'
import About from '../../components/About/about'
import Music from '../../components/Music/music'
import Photos from '../../components/Photos/photos'
import Contact from '../../components/Contact/contact'

const Home = () => {
  return (
    <>
    <Nav></Nav>
    <Landing></Landing>
    <About></About>
    <Music></Music>
    <Photos></Photos>
    <Contact></Contact>
    </>
  )
}

export default Home