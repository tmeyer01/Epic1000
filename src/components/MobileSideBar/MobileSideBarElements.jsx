import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.div`
  position: fixed;
  /* position: absolute; */
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  top:0px;
  left:0;
  transition: 1.2s ease-in-out;
  opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '80px' : '-100%')};;
  /* opacity: ${({isOpen}) => (isOpen ? '100%' : '0')}; 
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};  */
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  display:none;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: repeat(10,70px);
  text-align: center;

  @media screen and (max-width: 480px ){
    grid-template-rows: repeat(9,60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem ;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;