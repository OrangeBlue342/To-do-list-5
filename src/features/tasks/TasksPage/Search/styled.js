import styled from "styled-components";

export const Wrapper = styled.div `
max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    background-color: white;
    padding: 20px;
    margin: 5px, 20px;
    
     @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
     }`;