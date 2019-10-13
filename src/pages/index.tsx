import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";

const Home = ({ data }: any) => {
  return (
    <Layout>
      <h1>Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
