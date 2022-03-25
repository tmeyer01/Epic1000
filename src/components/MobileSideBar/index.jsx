import React from 'react'
// import { MenuItems } from '../DropDownMenu/DropDownMenuItems';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './MobileSideBarElements'

function MobileSideBar({isOpen, toggle}) {

  console.log(isOpen)
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/SignUp"onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>Rules</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>Register</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>Forum</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>Buckshot</SidebarLink>
          {/* <SidebarLink></SidebarLink> */}
          <SidebarLink to="/SignUp"onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/SignUp"onClick={toggle}>About</SidebarLink>


        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default MobileSideBar