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
    border-radius: 10px;
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

export const UserDataWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(autofill, minmax(200px, 1fr));
  gap: 1rem 4rem;
  @media (min-width: 840px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .item {
    text-align: center;
    border-radius: 10em 20px 10em;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.2);
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

export const UserWrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const UserCardWrapper = styled.article`
  background: rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 10em;
  border-top-right-radius: 10em;
  position: relative;
  height: 14em;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: rgba(255, 255, 255, 0.2);
    color: #aaaaaa;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: 5px;
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      max-width: 6.3em;
      color: white;
      border: 2px solid white;
      border-radius: 5em 5em 5em;
      padding: 0.5rem 0.8rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: #ffffffcd;
        color: black;
        border: 1px solid black;
      }
    }

    @media screen and (max-width: 600px) {
      a {
        font-size: 0.7em;
        padding: 0.35rem 0.3rem;
      }
    }
  }
  .bio {
    color: grey;
  }
  .links {
    position: relative;
    left: 0px;
    display: flex;
    justify-content: space-evenly;
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: white;
      transition: all 0.3s linear;
      svg {
        color: white;
      }
      &:hover {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .links {
      display: block;
      left: 15px;
    }
    height: 16em;
  }
`;

export const FollowersWrapper = styled.article`
  background: rgba(255, 255, 255, 0.2);
  border-bottom-right-radius: 10em;
  border-top-left-radius: 10em;
  padding: 1.5rem 2rem;
  position: relative;
  max-height: 14em;
  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    background: rgba(255, 255, 255, 0.2);
    color: #d1d1d1;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: 5px;
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 200px;
    display: grid;
    margin: auto;
    justify-content: center;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 2rem 1rem;
    padding: 1rem 2rem;
    width: auto;
    border-top-left-radius: 10px;
    border-radius: 5em 3em;
  }

  .followers::-webkit-scrollbar {
    display: none;
  }
  
  article {
    transition: all 0.2s linear;
    padding: 0.15rem 0.5rem;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
    a {
      color: rgba(240, 240, 240, 0.888);
      width: 5em;
    }
    a:hover {
      filter: drop-shadow(5px 7px 10px rgb(255, 255, 255));
    }
  }
  @media screen and (max-width: 600px) {
    .followers {
      height: 200px;
      a {
        font-size: .7em;
      }
    }
    max-height: 15em;
    
  }
`;

export const RepoStatsWrapper = styled.div`
   display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: 5px !important;
  }

`
