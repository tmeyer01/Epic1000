import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from "./";
import About from "./About";
import RoutePage from "./Route";
import Rules from "./Rules";
import RegisterPage from './Register';
import Map from './Map';

function Pages() {
  const location = useLocation()
 
 
  return (
    <AnimatePresence exitBeforeEnter>
      
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Rules" element={<Rules/>} />
          <Route path="/Route" element={<RoutePage/>} />
          <Route path='/Register' element={<RegisterPage/>} />
          <Route path='/map/:name' element={<Map/>} />
      </Routes>

    </AnimatePresence>



  )
}

export default Pages