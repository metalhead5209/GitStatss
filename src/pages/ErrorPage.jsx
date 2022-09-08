import React from 'react';
import styled from 'styled-components';
import { ErrorWrapper } from '../Wrappers';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <ErrorWrapper>
        <h1 className="err-code">404</h1>
        <h2 className="err-msg">Page Not Found</h2>
        <Link to="/" className="err-link">Return Home</Link>
    </ErrorWrapper>
  )
}

export default ErrorPage