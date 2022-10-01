import React from "react";
import styled from "styled-components";
import { GitContext } from "../Context/context";
import { NavWrapper } from "../Wrappers";

const NavBar = () => {
  const data = React.useContext(GitContext);
  // console.log(data);
  return <NavWrapper></NavWrapper>;
};

export default NavBar;
