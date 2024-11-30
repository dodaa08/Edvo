import React from 'react'
import HeaderC from '../components/headerC'
import vid from "../components/imgs/vid.mp4"
import About from './About'
import "../../src/index.css"
import HeaderSection from '../components/HeaderSection'
import VideoSection from '../components/VideoSection'
import Contact from './Contact'
import Footer from '../components/Footer'
import SomeContent from '../components/SomeContent'

function Landing() {
    return (
        <>
      <HeaderSection />
      <VideoSection />
      <About />
      <Contact />
        </>
    )
}

export default Landing
