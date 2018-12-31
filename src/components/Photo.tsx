import React, { FC } from "react";
import styled from "../styled-components";

const PhotoContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

const Button = styled.button<{ right?: boolean }>`
  background: none;
  border: none;
  font-size: 32px;
  position: absolute;
  right: ${({ right }) => (right ? "-50px" : "auto")};
  top: 50%;
`;

const Image = styled.img`
  height: 100%;
  max-height: 500px;
`;

interface IPhotoProps {
  photo: {
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
}

export const Photo: FC<IPhotoProps> = ({ photo }) => {
  const renderPhotoImageList = () =>
    photo.photo.map(photo => <Image key={photo.id} src={photo.file.url} />);

  return (
    <PhotoContainer>
      <Button>👈</Button>
      {renderPhotoImageList()}
      <Button right={true}>👉</Button>
    </PhotoContainer>
  );
};
