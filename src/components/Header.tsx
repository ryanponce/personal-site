import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <p className="site-title">
        <Link to="/">Ponce.la</Link>
      </p>
    </header>
  );
};

export { Header };
