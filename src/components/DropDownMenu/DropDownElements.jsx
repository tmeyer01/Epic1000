import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const DropDownMenu = styled.ul`
  background: #1888ff;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  border-radius: 0px 0px 10px 10px
`

export const DropListItem = styled.li`
  background: #1888ff;
  cursor: pointer;
  border-radius: 0px 0px 20px 20px;

  &.hover{
    background: #5cabff;
  }
`

export const DropLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`