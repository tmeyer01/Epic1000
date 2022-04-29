import styled from "styled-components";
import { NavLink } from "react-router-dom";
import topoDark from '../../images/topoBackground2.jpg'
import topo from '../../images/topoBackground.jpg'

export const IntelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:url(${topoDark});
  margin-top: 30px;
  width: 800px;
  border-radius: 15px;

`
export const IntelH1 = styled.h1`
  color: white;
  margin-top: 20px;
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  /* margin: 2rem 0rem; */
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #b9b7b7, #929090);
  width: 10rem;
  height: 4rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
    word-wrap: break-word;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.hover {
    background: linear-gradient(to right, #f27121, #e94057);

    h4 {
      color: #fff;
      word-wrap: break-word;
    }
    svg {
      color: #fff;
    }
  }
`;
