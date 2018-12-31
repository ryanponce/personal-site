import React from "react";
import { graphql } from "gatsby";
import { PhotoList } from "../components/PhotoList";
import Layout from "../components/Layout";

export default ({ data }: IPhotosProps) => {
  return (
    <Layout>
      <PhotoList photos={data.allContentfulPhotoPost.edges} />
    </Layout>
  );
};

interface IPhotosProps {
  data: {
    allContentfulPhotoPost: {
      edges: {
        node: {
          id: string;
          title: string;
          description: {
            description: string;
          };
          location: {
            lon: number;
            lat: number;
          };
          photo: {
            id: string;
            file: {
              url: string;
            };
          }[];
        };
      }[];
    };
  };
}

export const query = graphql`
  query {
    allContentfulPhotoPost {
      edges {
        node {
          id
          title
          description {
            description
          }
          location {
            lon
            lat
          }
          photo {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`;
