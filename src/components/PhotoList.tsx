import React, { FC } from "react";
import { Photo } from "./Photo";
import styled from "../styled-components";

const PhotoListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

interface IPhotoListProps {
  photos: {
    node: {
      id: string;
      description: {
        description: string;
      };
      title: string;
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
}

export const PhotoList: FC<IPhotoListProps> = ({ photos }) => {
  const renderPhotoList = () =>
    photos.map(photo => <Photo key={photo.node.id} photo={photo.node} />);

  return <PhotoListContainer>{renderPhotoList()}</PhotoListContainer>;
};
