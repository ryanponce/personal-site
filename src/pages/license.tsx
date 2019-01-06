import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data }: ILicenseProps) => {
  const { allMarkdownRemark } = data;
  const { node } = allMarkdownRemark.edges[0];
  const { html } = node;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

interface ILicenseProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          html: string;
        };
      }[];
    };
  };
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/license/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
