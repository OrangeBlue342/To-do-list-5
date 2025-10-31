import styled from "styled-components";

export const Article = styled.p`
max-width: 1000px;
background-color: white;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding: 20px;
margin: 5px, 20px;
`;

export const Header = styled.h2`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin: 5px, 20px;
  margin-bottom: 2px;
  background-color: ${({theme}) => theme.color.white};
`;