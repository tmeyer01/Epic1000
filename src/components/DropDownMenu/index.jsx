import React, { useState } from 'react';
import { DropDownMenu, DropListItem, DropLink } from './DropDownElements';
// import { MenuItems } from './DropDownMenuItems';

function DropDown({menuItems}) {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen)
  }

  return (
<>

    <DropDownMenu isOpen={isOpen} toggle={toggle}>
    {menuItems.map((item, index) => {
      return (
        <DropListItem key={index}>
          <DropLink
            id={item.cName}
            to={item.path}
          >
            {item.title}
          </DropLink>
        </DropListItem>
      )
    })}

    </DropDownMenu>
</>

  )
}

export default DropDown