import { Link as GatsbyLink } from "gatsby";
import styled from "../styled-components";

export const Link = styled(GatsbyLink)`
  border-bottom: 1px solid transparent;
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  transition: border-bottom 0.25s ease;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.link};
  }
`;
