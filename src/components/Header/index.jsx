import React from 'react'

import { HeaderContainer, HeaderTitle } from './HeaderElements'

const Header = ({
  bgImage,
  title,
}) => {
  return (
    <>
    <HeaderContainer bgImage={bgImage}>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
    </>
  )
}

export default Header