import { useState } from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './MobileSideBarElements'


// function MobileSideBar() {
function MobileSideBar({isOpen, toggle}) {

  
  
  // const [isOpen, setNavOpen] = useState(false);
  
  // function toggle() {
  //   setNavOpen(prev => !prev);
  // }
  console.log("isOpen", isOpen)
  // console.log("toggle", toggle)
  
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/About" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/Rules" onClick={toggle}>Rules</SidebarLink>
          <SidebarLink to="/Register" onClick={toggle}>Register</SidebarLink>
          <SidebarLink to="/Forum" onClick={toggle}>Forum</SidebarLink>
          <SidebarLink to="/BuckShot" onClick={toggle}>Buckshot</SidebarLink>
        
          <SidebarLink to="/GC" onClick={toggle}>General Classifications</SidebarLink>
          <SidebarLink to="/Links" onClick={toggle}>Links</SidebarLink>
          <SidebarLink to="/Gallery" onClick={toggle}>Gallery</SidebarLink>
          <SidebarLink to="/Video" onClick={toggle}>Video</SidebarLink>


        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default MobileSideBar