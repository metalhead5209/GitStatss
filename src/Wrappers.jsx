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
