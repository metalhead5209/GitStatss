import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import UserInfo from "../components/UserInfo";
import { ErrorWrapper } from "../Wrappers";

const Home = () => {
  return (
    <>
      <NavBar />
      <UserInfo />
    </>
  );
};

export default Home;
