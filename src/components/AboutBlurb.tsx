import React from "react";
import { Link } from "./Link";

export const AboutBlurb = () => (
  <div
    css={`
      max-width: 30rem;
    `}
  >
    👋🏼 Hi, I'm Ryan. I'm a software engineer living in Brooklyn. I work on the
    Frontend team at <Link to="https://say.com">Say</Link>. You can read more
    about me <Link to="/about">here</Link>.
  </div>
);
