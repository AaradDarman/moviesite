import React, { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 1rem 0;
  direction: ltr;
`;

const ImageItem = styled.a`
  padding: 0.2rem;
  div {
    background: ${({ img }) => `url(${img}) no-repeat center`};
    background-size: cover;
    width: 100px;
    height: 112px;
    border-radius: 0.5rem;
  }
`;

const ImageGallery = ({ imageGallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Wraper>
      {imageGallery &&
        imageGallery.map((img, index) => (
          <ImageItem img={img} onClick={() => handleClick(index)}>
            <div></div>
          </ImageItem>
        ))}
      {isOpen && (
        <Lightbox
          startIndex={photoIndex}
          images={imageGallery}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Wraper>
  );
};

export default ImageGallery;
