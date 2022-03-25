import { useState } from "react";
// import { Button } from '../Button/index'
// import { Dropdown } from './DropDown'
import { GiMountainRoad } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
// import {FaTimes} from 'react-icons/fa'
import Dropdown from "./DropDownMenu";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggle = () => {
    console.log("clicked");
    console.log("isOpen", isOpen);
    setIsOpen((prevOpen) => !prevOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  const onMouseEnter = () => {
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

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
          <NavLogo to="/">
            BC EPIC 1000
            <GiMountainRoad />
          </NavLogo>
         
          <MobileIcon onClick={toggle}>
            {isOpen ? <FaBars /> : <FaTimes />}
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
            <NavItem>
              <NavLinks to="/Buckshopt">Buckshot</NavLinks>
            </NavItem>
            <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLinks to="/More" onClick={closeMobileMenu}>
               <span>More</span> 
                <BsFillCaretDownFill />
              </NavLinks>
              {dropdown && <Dropdown />}
            </NavItem>
          </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
