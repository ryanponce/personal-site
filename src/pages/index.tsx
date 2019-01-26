import React, { version } from "react";
import Layout from "../components/Layout";
import { AboutBlurb } from "../components/AboutBlurb";
import { H2 } from "../components/H2";
import { graphql } from "gatsby";
import { Link } from "../components/Link";

const BASE_IMAGE_URL = `http://res.cloudinary.com/ryanponce/image/upload/t_media_lib_thumb`;

interface IEdge {
  node: {
    format: string;
    id: string;
    public_id: string;
    version: number;
  };
}

interface IIndexProps {
  data: {
    allCloudinaryMedia: {
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
    </H2>

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
      {data.allCloudinaryMedia.edges.map(photo => (
        <img
          key={photo.node.id}
          src={`${BASE_IMAGE_URL}/v${photo.node.version}/${
            photo.node.public_id
          }.${photo.node.format}`}
          css={`
            border-radius: 0.5rem;
            width: 100%;
          `}
        />
      ))}
    </div>

    <Link
      to="/photos"
      css={`
        display: inline-block;
        margin-top: 1rem;
        transition: transform 0.25s ease;

        &:hover {
          transform: translateX(0.25rem);
        }
      `}
    >
      View More &rarr;
    </Link>
  </Layout>
);

export const query = graphql`
  query {
    allCloudinaryMedia(limit: 6) {
      edges {
        node {
          format
          id
          public_id
          version
        }
      }
    }
  }
`;
