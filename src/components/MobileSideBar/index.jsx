
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
          <SidebarLink to="/About"onClick={toggle}>About</SidebarLink>
          <SidebarLink to="/Rules"onClick={toggle}>Rules</SidebarLink>
          <SidebarLink to="/Register"onClick={toggle}>Register</SidebarLink>
          <SidebarLink to="/Forum"onClick={toggle}>Forum</SidebarLink>
          <SidebarLink to="/BuckShot"onClick={toggle}>Buckshot</SidebarLink>
        
          <SidebarLink to="/GC"onClick={toggle}>General Classifications</SidebarLink>
          <SidebarLink to="/Links"onClick={toggle}>Links</SidebarLink>
          <SidebarLink to="/Gallery"onClick={toggle}>Gallery</SidebarLink>
          <SidebarLink to="/Video"onClick={toggle}>Video</SidebarLink>


        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default MobileSideBar