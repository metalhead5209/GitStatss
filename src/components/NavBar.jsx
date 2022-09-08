import React from 'react';
import styled from 'styled-components';
import { GitContext } from '../Context/context';
import { NavWrapper } from '../Wrappers';

const NavBar = () => {
    const data = React.useContext(GitContext);
  return (
    <NavWrapper>
        {data}
    </NavWrapper>
  )
}

export default NavBar