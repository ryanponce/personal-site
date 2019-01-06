import React from "react";
import { Link } from "./Link";

export const Footer = () => (
  <div>
    <span>
      Copyright &copy; {new Date().getFullYear()} Ryan Ponce - (
      <Link to="/license">Read the License</Link>)
    </span>
  </div>
);
