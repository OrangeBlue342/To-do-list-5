import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Button = styled.button ` 
    background-color: white;
    color: ${({theme}) => theme.color.teal};
    border: none;
    transition: 1s;
    margin: 0 0 0 60px;
    font-size: medium; 

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr;
    }

    &:hover {
      color: hsl(180, 100%, 35%);  
    }

    &:disabled {
        color: ${({theme}) => theme.color.silver};
    }
    `;