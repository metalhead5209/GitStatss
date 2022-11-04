import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import RepoStats from "../components/RepoStats";
import User from "../components/User";
import UserData from "../components/UserData";
import { ErrorWrapper } from "../Wrappers";
import { GitContext } from "../Context/context";
import Spinner from '../assets/Spinner-1s-200px.gif';

const Home = () => {
  const { loading } = React.useContext(GitContext);
  if (loading) {
    return <main className="load">
      <NavBar />
      <SearchBar />
      <img src={Spinner} id="loading" alt="loading Image" />
    </main>
  }
  return (
    <main>
        <NavBar />
        <SearchBar />
        <User />
        <UserData />
        <RepoStats />
    </main>
  );
};

export default Home;
