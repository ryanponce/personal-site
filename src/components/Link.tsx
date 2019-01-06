import { Link as GatsbyLink } from "gatsby";
import React, { ReactNode } from "react";
import { theme } from "../theme";

const linkStyles = `
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
`;

interface ILinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

export const Link = ({ children, className, to }: ILinkProps) => {
  if (to.includes("http")) {
    return (
      <a className={className} css={linkStyles} href={to}>
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink className={className} css={linkStyles} to={to}>
      {children}
    </GatsbyLink>
  );
};
