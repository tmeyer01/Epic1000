import React from 'react'
import Nav from '../components/Navbar'
import Hero from '../components/Hero'
function index() {
  return (
    <>
    {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
    <Nav/>
    <div className="sections">
      <Hero />
     
    </div>
  </>
  )
}

export default index