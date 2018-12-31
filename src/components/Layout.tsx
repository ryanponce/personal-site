import React, { ReactNode } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { ITheme } from "../theme";
import styled, { ThemeProvider } from "../styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  /* margin: 0 auto; */
  max-width: 50rem;
  padding: 1rem;
`;

const Main = styled.main`
  margin-top: 4rem;
`;

const theme: ITheme = {
  colors: {
    background: "white",
    body: "black",
    link: "dodgerblue"
  }
};

interface ILayoutProps {
  children: ReactNode;
}

export default ({ children }: ILayoutProps) => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Container>
        <Header />

        <Main>{children}</Main>
      </Container>
    </ThemeProvider>
  </>
);
