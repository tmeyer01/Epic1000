import { useState } from "react";
// import { Button } from '../Button/index'
// import { Dropdown } from './DropDown'
import { GiMountainRoad } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import logo from '../../images/logoWithWhiteOutline.png'
import { FaBars, FaTimes } from "react-icons/fa";
// import {FaTimes} from 'react-icons/fa'
import Dropdown from "../DropDownMenu";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavLogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";

const Navbar = ({isOpen, toggle}) => {
  
  console.log()

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    
    console.log("HELLOO")
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  console.log(toggle)
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
          <NavLogo to="/">
            BC EPIC 1000
            <GiMountainRoad />
            {/* <NavLogoImg alt="logo"  src={logo}/> */}
          </NavLogo>
         
          <MobileIcon onClick={toggle}>
            {/* <FaBars /> */}
            {isOpen ?  <FaTimes /> : <FaBars />}
          </MobileIcon>
          
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Route">Route</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Rules">Rules</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Register">Register</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Forum">Forum</NavLinks>
            </NavItem>
            <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLinks to="/More" onClick={closeMobileMenu}>
               <span>More</span> 
                <BsFillCaretDownFill />
              </NavLinks>
              {dropdown && <Dropdown />}
            </NavItem>
            
            <NavItem>
              <NavLinks id="buck" to="/Buckshot">Buckshot</NavLinks>
            </NavItem>
          </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
