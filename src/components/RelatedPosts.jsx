import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components";

import useBreakpoints from "../utils/useBreakPoints";

const BoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary.light};
  color: inherit;
  padding: 1rem 0 0 0;
  .owl-carousel {
    padding: 0 0.5rem;
  }
  .owl-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
  .owl-dots .owl-dot span {
    width: 15px;
  }
  .owl-dots .owl-dot.active span {
    width: 30px;
    background-color: ${({ theme }) => theme.secondary.main};
    transition: width 300ms ease-in-out;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1rem;
`;

const TitleIcon = styled.div`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.accent};
  mask: url(${({ iconUrl }) => iconUrl});
  display: inline-block;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
  margin-left: 10px;
`;

const Title = styled.p`
  margin: 0;
`;

const Item = styled.a`
  width: 100%;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.text};
  padding: 0 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
`;

const RelatedPosts = ({ movie }) => {
  const { isSm, isLg } = useBreakpoints();
  return (
    <BoxContainer className="mb-3 bp3-card">
      <TitleContainer>
        <TitleIcon iconUrl="/images/transparency.svg" />
        <Title>
          {movie.type === "movie" ? "فیلم های مشابه" : "سریال های مشابه"}
        </Title>
      </TitleContainer>
      {movie.relatedMovies && (
        <OwlCarousel
          className="owl-theme"
          stageOuterClass="owl-p"
          nav={false}
          dots={isLg ? false : true}
          autoplay={isSm ? false : true}
          autoplayHoverPause
          responsiveClass={true}
          autoplayTimeout={3000}
          responsive={{
            0: {
              items: 2,
            },
            490: {
              items: 2,
            },
            576: {
              items: 3,
            },
            768: {
              items: 5,
            },
            993: {
              items: 6,
            },
            1200: {
              items: 6,
            },
          }}
        >
          {movie.relatedMovies.map((item, index) => (
            <Item key={index}>
              <img src={item.imageUrl} alt={item.title} />
            </Item>
          ))}
        </OwlCarousel>
      )}
    </BoxContainer>
  );
};

export default RelatedPosts;
