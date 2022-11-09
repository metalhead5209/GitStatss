import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Loader from '../assets/Spinner-1s-200px.gif';



const AuthedWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0();
    if(isLoading) {
        return (
            <AuthWrapper>
                <img src={Loader} alt='loading' />
            </AuthWrapper>
        );
    }
    if (error) {
        return (
            <AuthWrapper>
                <h1>{error.message}</h1>
            </AuthWrapper>
        );
    }
  return <>{children}</>
};

const AuthWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;


export default AuthedWrapper