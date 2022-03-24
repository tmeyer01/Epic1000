import {useState} from 'react';
// import { Button } from '../Button/index'
// import { Dropdown } from './DropDown'
import { GiMountainRoad } from "react-icons/gi";
import {FaBars} from 'react-icons/fa';

import { Nav, NavBarContainer, NavLogo, MobileIcon } from './NavElements'


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    console.log("clicked")
    setIsOpen((prevOpen) => !prevOpen)
  }
  
  return (
    <>
    <Nav>
    <NavLogo to="/">
      BC EPIC 1000
      <GiMountainRoad />
    </NavLogo>
    <MobileIcon onClick={toggle}>
      <FaBars />
    </MobileIcon>


    </Nav>
    </>
  )
}

export default Navbar