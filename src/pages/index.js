import React, { useEffect, useState } from "react";
import MobileSideBar from '../components/MobileSideBar/index'
import Nav from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'


const Home = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const [size, setSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });


  // useEffect(() => {
  //   const handleResize = () => {
  //       setSize({
  //           width: window.innerWidth,
  //           height: window.innerHeight,
  //       });
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);


  // useEffect(() => {
  //   if (size.width > 980 && isOpen) {
  //       setIsOpen(false);
  //   }
  // }, [size.width, isOpen]);

  // const toggle = () => {
  //   setIsOpen((prevOpen) => !prevOpen)
  // };

  return (
    <>
    {/* <MobileSideBar isOpen={isOpen} toggle={toggle}/>
    <Nav toggle={toggle} isOpen={isOpen}/> */}
    {/* <div className="sections"> */}
      <Hero />
      {/* <About /> */}
      <Footer/>
    {/* </div> */}
  </>
  )
}

export default Home