import reset from "styled-reset";
import { createGlobalStyle } from "../styled-components";
import { theme } from "../theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${theme.colors.background};
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";    
    font-size: 1.25rem;
    line-height: 1.4;
  }

  a {
    color: ${theme.colors.link};
    background: ${theme.colors.gradient};
    border-bottom: 1px solid transparent;
    text-decoration: none;
    transition: border-bottom 0.25s ease;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      border-bottom: 1px solid ${theme.colors.link};
    }
  }
`;
