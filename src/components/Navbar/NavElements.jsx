import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  /* height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  width: 10%; */

  /* background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')}; */
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:9999;


  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }



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
  font-size: 1.8rem;
`


// export const NavLogoImg = styled.img`
//   height: 90%;

//   @media screen and (max-width: 480px){
//     width: 50%;
//   }

//   @media screen and (max-width: 786px){
//     font-size: 80%;
//   }

// `

export const NavIcon = styled.div`
  /* margin-left: 0.5rem;
  font-size: 1.6rem; */
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 889px){
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

  @media screen and (max-width: 889px){
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

  &:active {
    border-bottom: 3px solid #fff;
  }
  &:hover {
    border-bottom: 3px solid #fff;
  }

  span{
    padding-right: .2em;
  }
  /* buck{
    color: green;
    @media screen and (max-width: 1326px){
    display: none;
  } */
  //}
`;