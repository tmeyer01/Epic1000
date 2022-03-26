import React, { useState } from 'react'
import MobileSideBar from '../components/MobileSideBar/index'
import Nav from '../components/Navbar'
import Hero from '../components/Hero'


const Home = () =>{

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log("clicked", isOpen)
    setIsOpen((prevOpen) => !prevOpen)
  }

  return (
    <>
    <MobileSideBar isOpen={isOpen} toggle={toggle}/>
    <Nav toggle={toggle} isOpen={isOpen}/>
    <div className="sections">
      <Hero />
     
    </div>
  </>
  )
}

export default Home