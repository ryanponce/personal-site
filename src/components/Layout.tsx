import React, { ReactNode } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import styled, { ThemeProvider } from "../styled-components";
import { theme } from "../theme";
import { Footer } from "./Footer";

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.body};
  margin: 0 auto;
  max-width: 50rem;
  padding: 2rem 1rem;

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

interface ILayoutProps {
  children: ReactNode;
}

export default ({ children }: ILayoutProps) => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Container>
        <Header />

        <main
          css={`
            margin-top: 3rem;
          `}
        >
          {children}
        </main>

        <Footer />
      </Container>
    </ThemeProvider>
  </>
);
