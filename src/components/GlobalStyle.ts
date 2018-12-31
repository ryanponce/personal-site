import reset from "styled-reset";
import { createGlobalStyle } from "../styled-components";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";    
  }

  a {
    text-decoration: none;
  }
`;
