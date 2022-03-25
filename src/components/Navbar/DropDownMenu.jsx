import React, { useState } from 'react';
import { DropDownMenu, DropListItem, DropLink } from './DropDownElements';
import { MenuItems } from './DropDownMenuItems';

function DropDown() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("clicked")
    setIsOpen((prevOpen) => !prevOpen)
  }

  return (
<>

    <DropDownMenu isOpen={isOpen} toggle={toggle}>
    {MenuItems.map((item, index) => {
      return (
        <DropListItem key={index}>
          <DropLink
            id={item.cName}
            to={item.path}
            onClick={toggle}
          >
            {item.title}
          </DropLink>
        </DropListItem>
      )
    })}

    </DropDownMenu>
</>
    // <div>
    //   <ul>
    //     <li>general classification</li>
    //     <li>Links</li>
    //     <li>Gallery</li>
    //     <li>Video</li>
    //     <li>Contact</li>
    //   </ul>
    // </div>
  )
}

export default DropDown