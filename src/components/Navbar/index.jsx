import { useState, useEffect } from "react";
// import { Button } from '../Button/index'
// import { Dropdown } from './DropDown'
import { GiMountainRoad } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons";
// import logo from '../../images/logoWithWhiteOutline.png'
import { FaBars, FaTimes } from "react-icons/fa";
// import {FaTimes} from 'react-icons/fa'
import Dropdown from "../DropDownMenu";

import { MenuItems } from '../DropDownMenu/DropDownMenuItems';
// import { RouteItems } from '../DropDownMenu/DropDownRouteItems'

import {
  Nav,
  NavBarContainer,
  NavLogo,
 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavNonLink,
} from "./NavElements";

const Navbar = ({isOpen, toggle}) => {
  
 

  const [click, setClick] = useState(false);
  const [moreDropDown, setMoreDropDown] = useState(false);

  // const handleClick = () => {
  //   setClick((prevClick) => !prevClick);
  // };

  const closeMobileMenu = () => setClick(false);

  const onMouseEnterMore = () => {  
    if (window.innerWidth < 960) {
      setMoreDropDown(false);
    } else {
      setMoreDropDown(true);
    }
  };

  const onMouseLeaveMore = () => {
    if (window.innerWidth < 960) {
      setMoreDropDown(false);
    } else {
      setMoreDropDown(false);
    }
  };

  const [scrollNav, setScrollNav] = useState(false);

  
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

 
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} isOpen={isOpen}>
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
              <NavLinks to="/About">About</NavLinks>
            </NavItem>
            <NavItem>
            {/* <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
              <NavLinks to="/Route">Route</NavLinks>
              {/* <BsFillCaretDownFill /> */}
              {/* {dropdown && <Dropdown menuItems={RouteItems}/>} */}
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
            <NavItem onMouseEnter={onMouseEnterMore} onMouseLeave={onMouseLeaveMore}>
              <NavNonLink onClick={closeMobileMenu}>
               <span >More</span> 
                <BsFillCaretDownFill />
              </NavNonLink>
              {moreDropDown && <Dropdown menuItems={MenuItems}/>}
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
