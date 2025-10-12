import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: inherit;
}


#root {
    font-family: Montserrat, sans-serif;
    max-width: 1000px;
    padding: 20px;
    margin: 0 auto;
    background-color: ${({theme}) => theme.color.silver};
}

body {
     background-color: ${({theme}) => theme.color.silver};
};

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    `;