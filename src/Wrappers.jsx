import styled from "styled-components";

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

    @media screen and (max-width:800px) {
        width: 80%;
    
}
`;