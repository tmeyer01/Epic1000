import React from 'react'
import About from '../components/About'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import { headerAbout } from '../data/headerData'
const AboutPage = () => {
  return (
    <>
    <Header {...headerAbout}/>
    <About/>
    {/* <Footer/> */}
    </>
  )
}

export default AboutPage