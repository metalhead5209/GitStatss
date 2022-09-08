import React from 'react';
import styled from 'styled-components';
import {LoginWrapper} from '../Wrappers';
import LoginImg from '../assets/login-img.jpg';


const LoginPage = () => {
  return (
    <LoginWrapper>
        <div className="login-container">
            <h1>Github Profiles</h1>
            <img src={LoginImg} className="login-img" alt="login" />
            <button className="login-btn">Login</button>
        </div>
    </LoginWrapper>
  )
}

export default LoginPage