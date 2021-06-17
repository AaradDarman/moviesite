import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Wraper = styled.div`
  direction: ltr;
  .owl-item {
    padding: 0 7px;
  }
  .owl-carousel {
    margin: 0 -7px;
  }
  .owl-carousel .owl-nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 36%;
    left: 0;
    right: 0;
    pointer-events: none;
  }
  .owl-carousel .owl-nav button.owl-prev,
  .owl-carousel .owl-nav button.owl-next {
    pointer-events: all;
    transition: all 300ms ease-in-out;
    opacity: 0;
    padding: 0 !important;
    margin: 0;
    border: none;
  }
  .owl-theme .owl-nav [class*="owl-"]:hover {
    background: initial;
    color: initial;
    text-decoration: none;
  }
  .owl-carousel:hover .owl-nav button.owl-prev {
    opacity: 1;
    transform: translateX(-10px);
  }
  .owl-carousel:hover .owl-nav button.owl-next {
    opacity: 1;
    transform: translateX(10px);
  }
  button.owl-next span,
  button.owl-prev span {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.primary.light};
    font-size: 2rem;
    padding: 0 0.5rem 4px 0.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 0 1px rgb(16 22 26 / 15%), 0 0 0 rgb(16 22 26 / 0%),
      0 0 0 rgb(16 22 26 / 0%);
  }
`;

const MyCard = styled(Card)`
  background-color: ${({ theme }) => theme.primary.light};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  padding: 0;
  direction: rtl;
  font-size: 0.88rem;
  .slider-item {
    color: #fff;
  }
  &:hover {
    box-shadow: ${({ theme }) =>
      !theme.isDark
        ? null
        : "0px 2px 6px 1px rgba(0, 0, 0, 0.6),0px 4px 8px 1px rgba(0, 0, 0, 0.4) !important"};
  }

  img {
    height: 100%;
  }
  .item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    transform: scale(0.97);
    opacity: 0;
    transition: all 300ms ease-in-out;
  }
  .item-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: linear-gradient(to top, black, transparent);
    padding-top: 100px;
    padding-bottom: 10px;
    transition: all 300ms ease-in-out;
  }
  .item-title p {
    margin-bottom: 0;
    padding: 0 0.7rem;
  }
  .item-cover:hover .item-overlay {
    transform: scale(1);
    opacity: 1;
  }
  .item-cover:hover .item-title {
    transform: translateY(100px);
  }
  .item-summary {
    padding: 1rem;
    margin: 0;
    line-height: 1.75;
    text-align: justify;
  }
  .item-rating {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    padding: 0 0.5rem;
    font-family: Arial, sans-serif;
    color: ${({ theme }) => theme.accent};
  }
  .icon-imdb {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const MovieCard = ({ item }) => {
  let cloneItem = { ...item };
  let summary = cloneItem.summary;

  summary = summary.split(" ", 50).join(" ");
  if (summary.slice(-3) !== "...") {
    summary += "...";
  }
  return (
    <MyCard interactive={true} elevation={Elevation.TWO}>
      <NavLink
        className="slider-item"
        to={`/${item.type}/download/${item.title}`}
      >
        <div className="item-cover">
          <img src={item.imgUrl} alt={item.title} />
          <div className="item-title">
            <p>
              {item.type === "movie" ? "دانلود فیلم " : "دانلود سریال "}
              {item.title}
            </p>
          </div>
          <div className="item-overlay">
            <p className="item-summary">{summary}</p>
            <div className="item-rating">
              <span className="icon-imdb">IMDb</span>
              {item.imdbRate}
            </div>
          </div>
        </div>
      </NavLink>
    </MyCard>
  );
};

const Carousel = () => {
  const { movies } = useSelector((state) => state);
  return (
    <Wraper className="px-2 px-lg-4">
      <div className="row">
        <div className="col-12 d-flex justify-content-center ">
          <OwlCarousel
            className="owl-theme"
            stageOuterClass="owl-p"
            loop
            nav
            dots={false}
            autoplay
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
              1200: {
                items: 6,
              },
            }}
          >
            {movies.map((item) => (
              <MovieCard item={item} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </Wraper>
  );
};

export default Carousel;
