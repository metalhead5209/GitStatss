import styled from "styled-components";

// ERROR PAGE
export const ErrorWrapper = styled.section`
  height: 500px;
  width: 800px;
  background-color: rgb(220, 220, 220);
  margin: 5em auto;
  place-items: center;
  display: grid;
  justify-content: center;
  border: 3px solid white;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;


// LOGIN PAGE
export const LoginWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: auto;
  .login-container {
    width: 90vw;
    max-width: 500px;
    text-align: center;
  }

  .login-btn {
    margin: 1em;
    width: 8em;
    background-image: linear-gradient(
      to right,
      #a1c4fd 0%,
      #c2e9fb 51%,
      #a1c4fd 100%
    );
    border-radius: 5px;
    color: black;
    border-radius: $border-rounded;
    padding: 1em 3em;
    background-size: 200% auto;
    color: white;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 4px 15px 0px;
    background-image: linear-gradient(
      to right,
      #364ff4 0%,
      #ded4f0 50%,
      #364ff4 100%
    );
    transition: 0.5s;
    &:hover {
      background-position: right center;
      cursor: pointer;
    }
  }

  .login-img {
    border-radius: 50%;
}

h1 {
    font-size: 3em;
    position: relative;
    top: -50px;

    @media screen and (max-width: 700px) {
        font-size: 2em;
    }
}
  
`;


// NAVBAR
export const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: auto auto 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #b9b5b5;
  
  h4 {
    margin-bottom: 0;
    font-weight: 500;
  }

  img {
    width: 35px;
    height: 35px; 
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: transparent;
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: auto;
    color: grey;
    cursor: pointer;
  }
`;


export const UserInfoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(autofill, minmax(200px, 1fr));
  gap: 1rem 4rem;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));  }
  .item {
    text-align: center;
    border-radius: 10px;
    padding: 1rem 2rem;
    background: rgba(255,255,255, 0.2);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 2em;
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .blue {
      background: #7c91f6;
      color: #473dd8;
    }
    .green {
      background: #70b69b;
      color: #0d774e;
    }
    .purple {
      background: #ce9ef1;
      color: #5d2188;
    }
  }

`;