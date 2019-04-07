import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `ryanponce`, `personal website`]} />
    <p>👋 Hi, I&#39;m Ryan! Thanks for stopping by.</p>
    <p>
      I&#39;m a software engineer living in Los Angeles. I work on the frontend
      team at <a href="https://say.com">Say</a>.
    </p>

    <h2>Links</h2>

    <ul>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Photos</Link>
      </li>
      <li>
        <Link to="/">Walks</Link>
      </li>
      <li>
        <Link to="/">About Me</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
