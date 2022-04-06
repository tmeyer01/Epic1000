// import React, { useEffect, useState } from "react";
// import MobileSideBar from '../components/MobileSideBar/index'
// import Nav from '../components/Navbar'
import Hero from '../components/Hero'
// import About from '../components/About'
// import Footer from '../components/Footer'
import { motion } from "framer-motion";

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

    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.2}}
    >
      <Hero />

      </motion.div>
      {/* <About /> */}
      {/* <Footer/> */}
    {/* </div> */}
  </>
  )
}

export default Home