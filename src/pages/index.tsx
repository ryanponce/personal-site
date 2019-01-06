import React from "react";
import Layout from "../components/Layout";
import { AboutBlurb } from "../components/AboutBlurb";
import { H2 } from "../components/H2";
import { graphql } from "gatsby";

interface IEdge {
  node: {
    id: string;
    photo: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

interface IIndexProps {
  data: {
    allContentfulPhotoPost: {
      edges: IEdge[];
    };
  };
}

export default ({ data }: IIndexProps) => (
  <Layout>
    <AboutBlurb />

    <H2
      css={`
        margin-top: 3rem;
      `}
    >
      Recent Posts
    </H2>

    <H2
      css={`
        margin-top: 3rem;
      `}
    >
      Latest Photos
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
          margin-top: 2rem;

          @media (max-width: 32rem) {
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      >
        {data.allContentfulPhotoPost.edges.map(photo => (
          <img
            alt={photo.node.photo.title}
            src={photo.node.photo.file.url}
            css={`
              border-radius: 0.5rem;
              width: 100%;
            `}
          />
        ))}
      </div>
    </H2>
  </Layout>
);

export const query = graphql`
  query {
    allContentfulPhotoPost(limit: 9) {
      edges {
        node {
          id
          photo {
            file {
              url
            }
            title
          }
        }
      }
    }
  }
`;
