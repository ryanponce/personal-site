import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";

const Index = ({ data }: { data: any }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {posts.map((node: any) => {
        const post = node.node;

        return (
          <article key={post.id}>
            <h2>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h2>
            <span>{post.frontmatter.date}</span>
            <p dangerouslySetInnerHTML={{ __html: post.frontmatter.summary }} />
          </article>
        );
      })}
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`;
