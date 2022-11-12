import React from 'react';
import {LoginWrapper} from '../Wrappers';
import LoginImg from '../assets/login-img.jpg';
import { useAuth0 } from '@auth0/auth0-react';


const LoginPage = () => {
  const { loginWithRedirect, user } = useAuth0();
  console.log(user)
  return (
    <LoginWrapper>
        <div className="login-container">
            <h1>GitStatss</h1>
            <img src={LoginImg} className="login-img" alt="login" />
            <button className="login-btn" onClick={loginWithRedirect}>Login</button>
        </div>
    </LoginWrapper>
  )
}

export default LoginPage