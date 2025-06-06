import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      all: unset;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
`;