import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
color: white;
text-decoration: none;

&:hover {
    color: wheat;
    border-bottom: 1px solid;
}

&.active {
   font-weight: bold;
}
`;

export const List = styled.ul`
max-width: 1000 px;
background-color: teal;
display: flex;
justify-content: center;
list-style: none;
padding: 0;
`;

export const Item = styled.li`
margin: 20px;
`;