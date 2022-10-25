import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import RepoStats from "../components/RepoStats";
import User from "../components/User";
import UserData from "../components/UserData";
import { ErrorWrapper } from "../Wrappers";

const Home = () => {
  return (
    <>
        <NavBar />
        <SearchBar />
        <UserData />
        <User />
        <RepoStats />
    </>
  );
};

export default Home;
