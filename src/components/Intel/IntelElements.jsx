import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const IntelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const IntelH1 = styled.h1`
  
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 2rem 0rem; */
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
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
