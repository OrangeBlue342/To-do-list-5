import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled, {css} from "styled-components";

export const List = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li `
    background-color: ${({theme}) => theme.color.white};
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 10px;
    word-break: break-word;
    margin-bottom: 2px;
    font-family: Montserrat, sans-serif;

    ${({hidden}) => hidden && css`
    display: none;`}
`;

export const Content = styled.span `
${({done}) => done && css `
 text-decoration: line-through;`}
`;

export const Button = styled.button `
border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({button_done}) => button_done && css `
    background-color: rgb(2, 154, 2);
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transition: 1s;
    
    &:hover {background-color: hsl(120, 97%, 41%);}
    `}

    ${({button_remove}) => button_remove && css `
    
    background-color: crimson;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    transition: 1s;
    
    &:hover {background-color: hsl(348, 83%, 57%);}
    `}
`;

export const Link = styled(NavLink)`

    text-decoration: none;
`

