import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Movies from "../components/Movies";

const MoviesPage = ({ match, history, ...otherProps }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const { movies, tvShows } = useSelector((state) => state);

  const handlePageChange = (selected) => {
    console.log("om=ncha");
    if (match.path.search("/movie") != -1) {
      history.push(
        `/movie${
          match.params.category != undefined ? "/" + match.params.category : ""
        }/page/${selected + 1}`
      );
    } else {
      history.push(`/tv-show/${match.params.category}/page/${selected + 1}`);
    }
  };

  return (
    <>
      <Movies
        items={match.path.search("/movie") != -1 ? movies : tvShows}
        totalItems={100}
        onPageChange={handlePageChange}
        {...otherProps}
      />
    </>
  );
};

export default MoviesPage;
