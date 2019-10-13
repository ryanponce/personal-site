import React, { ReactNode, FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { Link } from "gatsby";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <Header>
            <Link to="/">Home</Link>
            <div>
              <Link to="/about">About</Link>
              <Link to="/more">More</Link>
            </div>
          </Header>

          {children}

          <Footer>
            <div>&copy; {new Date().getFullYear()} Ryan Ponce</div>
            <div>
              <a href="mailto:ryan@ponce.la">E-mail Me</a>
            </div>
          </Footer>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export { Layout };

const Wrapper = styled.div`
  padding: 2rem;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 64rem;
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
