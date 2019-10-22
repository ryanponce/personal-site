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
      <Container>
        <Header>
          <Link to="/">Home</Link>
          <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/more">More</NavLink>
          </div>
        </Header>

        <Main>{children}</Main>

        <Footer>
          <div>&copy; {new Date().getFullYear()} Ryan Ponce</div>
          <div>
            <a href="mailto:ryan@ponce.la">E-mail Me</a>
          </div>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export { Layout };

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
  max-width: 64rem;
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  margin-left: 2rem;

  &:first-child {
    margin-left: 0;
  }
`;

const Main = styled.main`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
