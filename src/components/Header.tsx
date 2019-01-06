import React from "react";
import { Link } from "./Link";
import { theme } from "../theme";

export const Header = () => (
  <div
    css={`
      align-items: center;
      display: flex;
      justify-content: space-between;
    `}
  >
    <div>
      <Link to="/">
        <h1
          css={`
            color: ${theme.colors.body};
            background: ${theme.colors.gradient};
            font-size: 2rem;
            font-weight: 900;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Ryan Ponce
        </h1>
      </Link>
    </div>
  </div>
);
