import React from "react";
import styled from "styled-components";
import { GitContext } from "../Context/context";
import { NavWrapper } from "../Wrappers";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { 
    isLoading, 
    isAuthenticated, 
    error, 
    user, 
    loginWithRedirect, 
    logout 
  } = useAuth0();

  if (isLoading) {
    return <NavWrapper>
    <div>Loading...</div>
    </NavWrapper>
  };
  if (error) {
    return <NavWrapper>
      <div>Oops...{error.message}</div>
      </NavWrapper>
  };

  const USER = isAuthenticated && user;

  console.log({user, isAuthenticated, isLoading});

  return (
    <NavWrapper>
      {USER && user.picture && <img src={user.picture} alt='userpic' /> }
      {USER && user.name && <h3>Welcome, <b>{user.name}</b></h3>}
      {USER  ?
        <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Logout
      </button>:
      <button onClick={loginWithRedirect}>Login</button>
    }
      
      
    </NavWrapper>
  );
};

export default NavBar;
