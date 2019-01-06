import React from "react";
import { Link } from "./Link";

export const Footer = () => (
  <footer
    css={`
      margin-top: 3rem;
    `}
  >
    <span>Copyright &copy; {new Date().getFullYear()} Ryan Ponce</span>
  </footer>
);
