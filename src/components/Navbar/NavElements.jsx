import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;


export const NavBarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`

export const NavIcon = styled.div`
  margin-left: 0.5rem;
  font-size: 1.6rem;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 786px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
  
}
`

export const NavMenu = styled.ul`
  display: flex;
  
  align-items: center;
  justify-content: center;
  
  
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 786px){
    display: none;
  }

`;

export const NavItem = styled.li`
  height: 80px;
  
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #fff;
  }
  &.hover {
    border-bottom: 3px solid #fff;
  }
`;