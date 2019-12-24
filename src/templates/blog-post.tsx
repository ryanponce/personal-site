import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";

const BlogPostTemplate = ({ data }: { data: any }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
