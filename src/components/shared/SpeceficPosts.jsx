import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "styled-components";
import MovieCard from "../MovieCard";
import { Typography } from "@material-ui/core";

const BoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary.light};
  color: inherit;
  padding: 1rem 0 0 0;
  .active.center {
    transition: all 300ms ease-in-out;
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
  .owl-carousel {
    padding: 1rem 0.5rem;
  }
  .owl-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    transform: scale3d(0.8, 0.8, 1);
    opacity: 0.2;
  }
  .owl-item.center:hover a::after {
    width: 100%;
  }
  .owl-item.center:hover span {
    top: 5px;
  }
  .owl-item.center:hover p {
    left: 0;
  }
  .owl-item.center:hover .play-icon {
    opacity: 1;
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
const SeeMore = styled.a`
  margin: 0;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary.main};
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  margin-right: auto;
`;
const Item = styled.a`
  width: 100%;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
  &::after {
    content: "";
    width: 0;
    height: 100%;
    background-color: rgba(29, 30, 50, 0.78);
    position: absolute;
    top: 0;
    right: 0;
    transition: all 300ms ease-in-out;
    border-radius: 0.3rem;
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.2rem 0.6rem;
    border-radius: 1rem;
    position: absolute;
    top: -50px;
    left: 5px;
    z-index: 2;
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.primary.main};
    opacity: 0.7;
    transition: all 300ms ease-in-out;
  }
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    font-size: 3rem;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 300ms ease-in-out;
  }
  span i {
    margin-right: 3px;
  }
  p {
    position: absolute;
    bottom: 0;
    left: -500px;
    right: 0;
    z-index: 2;
    text-align: center;
    padding: 5px;
    margin-bottom: 5px;
    transition: all 300ms ease-in-out;
  }
`;

const SpeceficPosts = ({ iconUrl, title, items }) => {
  return (
    <BoxContainer className="mb-3">
      <TitleContainer>
        <TitleIcon iconUrl={iconUrl} />
        <Title>{title}</Title>
        <SeeMore>مشاهده همه</SeeMore>
      </TitleContainer>
      <OwlCarousel
        className="owl-theme"
        stageOuterClass="owl-p"
        loop
        nav={false}
        dots={false}
        center
        autoplay
        autoplayHoverPause
        responsiveClass={true}
        autoplayTimeout={3000}
        responsive={{
          0: {
            items: 2,
          },
          490: {
            items: 3,
          },
          576: {
            items: 4,
          },
          768: {
            items: 5,
          },
          993: {
            items: 2,
          },
          1200: {
            items: 2,
          },
        }}
      >
        {items.map((item) => (
          <Item
          // href={`/${item.title}`}
          >
            <img src={item.imageUrl} alt={item.title} />
            <span>
              <i className="fab fa-imdb"></i>
              {item.imdbRate}
            </span>
            <i className="far fa-play-circle play-icon"></i>
            <p>{item.title}</p>
          </Item>
        ))}
      </OwlCarousel>
    </BoxContainer>
  );
};

export default SpeceficPosts;
