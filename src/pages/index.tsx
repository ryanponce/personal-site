import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";

const Index = ({ data }: { data: any }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {posts.map((node: any) => (
        <article key={node.id}>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </article>
      ))}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          excerpt
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
