import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    background-color: white;
    padding: 20px;
    margin: 5px, 20px;
    
     @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
    }
    `;

    export const Input = styled.input `
    padding: 10px;
    border: 2px, solid ${({theme}) => theme.color.alto};
    `;

    export const ButtonAdd = styled.button`
     background-color: teal;
     color: white;
     padding: 10px;
     border: none;
     transition: 1s;

     &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(125%);
     }
    `;