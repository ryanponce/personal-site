import React from "react";
import styled from "../styled-components";
import { Link } from "./Link";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SiteTitle = styled.h1`
  color: ${({ theme }) => theme.colors.body};
  font-size: 2rem;
  font-weight: 900;
`;

const Nav = styled.nav`
  font-size: 1.25rem;
`;

const NavLink = styled(Link)`
  margin-left: 2rem;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const Header = () => (
  <Wrapper>
    <div>
      <Link to="/">
        <SiteTitle>Ryan Ponce</SiteTitle>
      </Link>
    </div>

    <Nav>
      <NavLink to="/photos">
        <span>Photos</span>
      </NavLink>

      <NavLink to="/blog">
        <span>Blog</span>
      </NavLink>

      <NavLink to="/about">
        <span>About</span>
      </NavLink>
    </Nav>
  </Wrapper>
);
