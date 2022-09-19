import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import User from "../components/User";
import UserInfo from "../components/UserInfo";
import { ErrorWrapper } from "../Wrappers";

const Home = () => {
  return (
    <>
      <NavBar />
      <UserInfo />
      <User />
    </>
  );
};

export default Home;
