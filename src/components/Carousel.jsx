import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MovieCard from "./MovieCard";

const Carousel = ({ theme }) => {
  return (
    <OwlCarousel
      className="owl-theme"
      stageOuterClass="owl-p"
      loop
      margin={10}
      nav
    >
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
      <MovieCard theme={theme} />
    </OwlCarousel>
  );
};

export default Carousel;
