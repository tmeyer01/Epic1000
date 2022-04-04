import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect } from 'react';
import MobileSideBar from '../src/components/MobileSideBar'
import Nav from '../src/components/Navbar'
import Home from "./pages/";
import About from "./pages/About";
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    if (size.width > 980 && isOpen) {
        setIsOpen(false);
    }
  }, [size.width, isOpen]);

  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen)
  };








  return (
    <main>
      <BrowserRouter>
        <MobileSideBar isOpen={isOpen} toggle={toggle}/>
        <Nav toggle={toggle} isOpen={isOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
