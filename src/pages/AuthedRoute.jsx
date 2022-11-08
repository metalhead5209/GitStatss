import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthedRoute = () => {
  const isUser = true;
  return isUser ? <Outlet /> : <Navigate to='/login' />;
};

export default AuthedRoute


