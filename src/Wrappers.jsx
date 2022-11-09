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
  background: #262a32;

  h4 {
    margin-bottom: 0;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 4em;
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
  margin-bottom: 1em;
  @media (min-width: 840px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  .item {
    text-align: center;
    border-radius: 1.5em;
    padding: 1rem 2rem;
    background: #262a32;
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
  margin-bottom: 1.5em;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const UserCardWrapper = styled.article`
  background: #262a32;
  padding: 1.5rem 2rem;
  border-bottom-right-radius: 1.5em;
  border-top-right-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  position: relative;
  height: 14em;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: #262a32;
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
  background: #262a32;
  border-bottom-right-radius: 1.5em;
  border-top-left-radius: 1.5em;
  border-bottom-left-radius: 1.5em;
  padding: 1.5rem 2rem;
  position: relative;
  max-height: 14em;
  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    background: #3c414db8;
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
      h4 {
        font-size: 1em;
      }
    }
    max-height: 15em;
    
  }
`;

export const RepoStatsWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1.5fr;
  justify-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: 1.5rem !important;
  }

`
export const RepoStatsWrapperB = styled.div`
   display: grid;
   grid-template-columns: 1.5fr 1fr;
  justify-items: center;
  gap: 2rem;
  margin-bottom: 2em;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: 1.5rem !important;
  }

`

export const SearchBarWrapper = styled.div`
  position: relative;
  background-color: #262a32;
  display: grid;
  gap: 1rem 1.75rem;
  margin-bottom: 2em;
  border-radius: 1.5em;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background-color: #262a32;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 1.5em;
    padding: 0.5rem;
    input {
      
      background-color: #262a32;
      border-color: white;
      outline-color: white;
      letter-spacing: 2px;
      color: white;
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      background-color: #262a32;
      color: grey;
      text-transform: capitalize;
      letter-spacing: 2px;
    }
    button {
      border-radius: 1.5em;
      border: 1px solid white;
      padding: 0.35rem 0.5rem;
      text-transform: capitalize;
      font-weight: 600;
      letter-spacing: 2px;
      background: #262a32;
      color: grey;
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background-color: #ffffffa8;
        box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
        color: rgba(0,0,0,0.5);
      }
    }
    svg {
      color: white;
      width: 5em
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: grey;
    font-weight: 400;
  }
`;

export const SearchErrorWrapper = styled.article`
  position: absolute;
  width: 68vw;
  top: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: 2px;
  }
`
export const FooterWrapper = styled.section`
  width: 100%;
  height: 8em;
  background-color: #262a32;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
  .social-icon {
    margin: auto;
    width: auto;
    display: flex;
    justify-content: space-between;
  }
  img {
    filter: drop-shadow(0 0 0.75rem white);
    width: 3em;
    height: 2em;
  }
`

