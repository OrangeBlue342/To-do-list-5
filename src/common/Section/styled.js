import styled from "styled-components";

export const Body = styled.div`
padding-bottom: 2px;
`;

export const Title = styled.h2`
font-size: 20px;
margin-bottom: 2px;
margin: 0`;

export const Header = styled.header`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin: 5px, 20px;
  margin-bottom: 2px;
  background-color: ${({theme}) => theme.color.white};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
`;