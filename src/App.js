import { BrowserRouter} from "react-router-dom";
import {useState, useEffect } from 'react';
import MobileSideBar from '../src/components/MobileSideBar'
import Nav from '../src/components/Navbar'
// import Home from "./pages/";
// import About from "./pages/About";
// import Rules from "./pages/Rules";
// import RoutePage from "./pages/Route";
import Pages from './pages/Pages'
import Footer from './components/Footer'
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
        setIsOpen((prev) => !prev);
    }
  }, [size.width, isOpen]);

  const toggle = () => {
     setIsOpen((prevOpen) => !prevOpen)
  };

 

  return (
    <main>
      <BrowserRouter>
        <MobileSideBar toggle={toggle} isOpen={isOpen}/>
        <Nav toggle={toggle} isOpen={isOpen}/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Rules" element={<Rules/>} />
          <Route path="/Route" element={<RoutePage/>} />
        </Routes> */}
        <Pages toggle={toggle} isOpen={isOpen}/>
        <Footer/>
      </BrowserRouter>
    </main>
  );
}

export default App;
